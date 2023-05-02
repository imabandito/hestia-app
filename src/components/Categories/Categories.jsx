import React from 'react';
import { Trans } from 'react-i18next';
import { Link } from 'react-router-dom';

export const Categories = ({ data }) => (
  <div className='hero-section__categories'>
    {data.map((item) => (
      <Link
        rel='noreferrer'
        key={item.id}
        className='categories__item'
        to={item.src}
        style={{
          backgroundColor: `${item.color}`,
        }}
        aria-label={item.title}
      >
        <Trans>{item.title}</Trans>
      </Link>
    ))}
  </div>
);
