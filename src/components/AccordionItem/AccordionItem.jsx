import { Link } from 'react-router-dom';
import { Button } from '../UI/Buttons/Button';
import { useState } from 'react';
import cn from 'classnames';
import { Trans } from 'react-i18next';

export function AccordionItem({ accordion }) {
  const [isActive, setActive] = useState(false);

  const openAccordion = () => {
    if (isActive) {
      return setActive(false);
    }
    setActive(true);
  };

  const accordionClass = cn('accordion-item', {
    'accordion-item_opened': isActive,
  });

  return (
    <>
      <div
        className={accordionClass}
        key={accordion.id}
        data-testid='accordionItem'
      >
        <Button
          type='none'
          extraClass='accordion-item'
          text={accordion.name}
          icon='arrow'
          position='right'
          clickHandler={openAccordion}
          state={isActive}
          rotate='rotate-forward-90'
          data-testid='openAccordionButton'
        />
        {accordion.options && (
          <div className='accordion-options'>
            {accordion.options.map((option) => (
              <Link className='accordion-link' to='/catalog' key={option.id}>
                <Trans>{option.name}</Trans>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
