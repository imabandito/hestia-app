import React from 'react';
import { Link } from 'react-router-dom';
import { HomeLogo } from '..';
import { validatePathforBreadcrumbs } from '../../utils/path';
import { ArrowRight } from '../UI/indexIcon';

export function Breadcrumbs({ crumbs }) {
  const findRoutesRegex = new RegExp('[^\\/]{1,}', 'g');
  const routes = crumbs.pathname.match(findRoutesRegex);
  const lastRoute = routes.pop();

  return (
    <div className='wrapper breadcrumbs__box'>
      {
        <Link to={'/'}>
          <HomeLogo className='homeLogo' />
        </Link>
      }
      {routes.map((route, key) => (
        <div key={key} className='breadcrumbs__item'>
          <ArrowRight classname='green-arrow-right' />
          <Link className='breadcrumbs__link' to={'/' + route}>
            {route[0].toUpperCase() + route.slice(1)}
          </Link>
        </div>
      ))}
      <div key={routes.length} className='breadcrumbs__item'>
        <ArrowRight />
        <span className='breadcrumbs__current'>
          {validatePathforBreadcrumbs(lastRoute)[0].toUpperCase() +
            validatePathforBreadcrumbs(lastRoute).slice(1)}
        </span>
      </div>
    </div>
  );
}
