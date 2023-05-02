import { useState } from 'react';
import { useSelector } from 'react-redux';
import cn from 'classnames';
import { Button } from '../index';

export function PaymentAccordionItem({
  titleContent,
  extraClass,
  children,
  setIsChecked = () => {}
}) {
  const [isActive, setActive] = useState(false);
  const { orders } = useSelector(({ goodsReducer }) => goodsReducer);

  const openAccordion = () => {
    if (isActive) {
      setIsChecked(false);
      return setActive(false);
    }
    if (Object.getOwnPropertyNames(orders).length > 0) {
      setActive(true);
      setIsChecked(true);
    }
  };

  const accordionClass = cn(
    'accordion-item payment-accordion',
    {
      'accordion-item_opened': isActive
    },
    extraClass
  );

  return (
    <div className={accordionClass}>
      <div className='payment-accordion__info'>
        <Button
          type='none'
          text={titleContent}
          extraClass='payment-accordion-item'
          icon='arrow'
          position='right'
          clickHandler={openAccordion}
          state={isActive}
          rotate='rotate-forward-90'
          data-testid='openAccordionButton'
        />
      </div>
      <div
        className={`payment-accordion-content ${
          isActive && 'payment-accordion-content_opened'
        }`}
      >
        {children}
      </div>
    </div>
  );
}
