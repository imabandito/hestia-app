import { Trans } from 'react-i18next';

export function PaymentTitleContent({ price }) {
  return (
    <div className='payment-accordion__text'>
      <h6 className='payment-accordion__title'>
        <Trans>Your order</Trans>
      </h6>
      <p className='payment-accordion__description'>
        <Trans>for price:</Trans> &nbsp;
        <span>{price} uah</span>
      </p>
    </div>
  );
}
