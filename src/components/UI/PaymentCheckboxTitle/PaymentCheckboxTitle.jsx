import { Trans } from 'react-i18next';

export function PaymentCheckboxTitle({ setChecked = () => {}, title }) {
  const handleCheck = ({ target: { checked } }) => {
    setChecked(checked);
  };

  return (
    <div className='payment-checkbox-title'>
      <div className='payment-checkbox-title__checkbox'>
        <label htmlFor={title} className='payment-checkbox-title__label'>
          <input type='checkbox' name='' id={title} onClick={handleCheck} />
          <div className='payment-checkbox-title__fake'></div>
          <p>
            <Trans>{title}</Trans>
          </p>
        </label>
      </div>
    </div>
  );
}
