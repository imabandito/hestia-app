import { Trans } from 'react-i18next';

export function PaymentNumericTitle({ number, title, isChecked }) {
  return (
    <div className='payment-numeric-title'>
      <div
        className={`payment-numeric-title__number ${
          isChecked && 'payment-numeric-title_checked'
        }`}
      >
        {number}
      </div>
      <p>
        <Trans>{title}</Trans>
      </p>
    </div>
  );
}
