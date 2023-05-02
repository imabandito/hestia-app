import React from 'react';
import { useState } from 'react';
import cn from 'classnames';
import { SquaresIconBlack } from '../UI/indexIcon';
import { FilteringFieldset } from '..';

export function GetIdeasPageFiltering() {
  const [active, setActive] = useState(false);

  const dropdownClasses = cn('filtering-dropdown__box', {
    'filtering-dropdown__box_active': active,
  });

  function handleClick() {
    setActive((prev) => {
      return !prev;
    });
  }

  return (
    <div className='filtering-dropdown'>
      <span className='filtering-dropdown__button' onClick={handleClick}>
        <SquaresIconBlack />
      </span>
      <div className={dropdownClasses}>
        <div className='filtering-dropdown__inputs'>
          <h1>
            Please, select any filtering option(s). Press "Apply" to set filter.
            Press "Clear" to unset filter.
          </h1>
          <FilteringFieldset setActive={setActive} />
        </div>
      </div>
    </div>
  );
}
