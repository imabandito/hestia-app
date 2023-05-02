import React from 'react';
import { Button } from '../UI/Buttons/Button';
import { CategoryCard } from '../CategoryCard/CategoryCard';
import { Trans } from 'react-i18next';

export function CategoriesHomeSection({ data, setOpenCategoriesModal }) {
  return (
    <div
      className='wrapper categories-home-section'
      data-testid='categories-home-section'
    >
      <h2 className='categories-home-section__heading'>
        <Trans>Categories</Trans>
      </h2>
      <div
        className='categories-home-section__row'
        data-testid='categories-home-section-row'
      >
        {data.map((item, index) => (
          <CategoryCard
            key={index}
            text={item.name}
            extraClass='categoryCard'
            src={item.type}
            alt={item.alt}
            path={item.path}
          />
        ))}
      </div>
      <Button
        onClick={() => setOpenCategoriesModal(true)}
        text='More'
        type='greenTransparent'
        icon='arrow'
        position='right'
        extraClass='about'
      />
    </div>
  );
}
