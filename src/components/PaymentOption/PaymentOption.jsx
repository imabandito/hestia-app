import { useState, useEffect } from 'react';
import { Trans } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
  PaymentAccordionItem,
  PaymentCheckboxTitle,
  TextInput,
} from '../index';

export function PaymentOption({ options, setIsValid = () => {} }) {
  const { language } = useSelector(
    ({ changeLanguageReducer }) => changeLanguageReducer
  );
  const initialValues = {
    name: {
      value: '',
      regex: /^[a-zA-Z ]{3,}$/,
    },
    surname: {
      value: '',
      regex: /^[a-zA-Z ]{3,}$/,
    },
    promo: {
      value: '',
      regex: /^[a-zA-Z ]{4,}$/,
    },
  };

  const [inputValues, setInputValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleInputChange = ({ target: { id, value } }) => {
    setInputValues((prev) => ({
      ...prev,
      [id]: { ...prev[id], value },
    }));
    setErrors((prev) => ({
      ...prev,
      [id]: inputValues[id].regex.test(value),
    }));
  };

  return (
    <div className='payment-option' data-testid='payment-option'>
      <div className='payment-option__cards'>
        {options.map((option) => (
          <div key={option.id} className='payment-option-field'>
            <input
              type='radio'
              id={option.id}
              name='pay-option'
              className='payment-option-field__radio'
              onClick={() => setIsValid({ payment: true })}
            />
            <label
              htmlFor={option.id}
              className='payment-option-field__label'
              data-testid='payment-option__label'
            >
              <div className='payment-option-field__row'>
                <div className='payment-option-field__circle'></div>
                <div className='payment-option-field__info'>
                  <p className='payment-option-field__title'>
                    <Trans>{option.name}</Trans>
                  </p>
                  <p className='payment-option-field__description'>
                    <Trans>{option.description}</Trans>
                  </p>
                </div>
              </div>
            </label>
          </div>
        ))}
      </div>
      <div className='payment-option-receiver'>
        <PaymentAccordionItem
          titleContent={<PaymentCheckboxTitle title='I am not the recipient' />}
        >
          <div className='reply-form reply-form_payment'>
            <div className='reply-form__fields'>
              <TextInput
                value={inputValues.name?.value}
                placeholder={language === 'EN' ? 'Name' : 'Ім‘я'}
                handleInputChange={handleInputChange}
                id='name'
                error={errors.name}
              />
              <TextInput
                value={inputValues.surname?.value}
                placeholder={language === 'EN' ? 'Surname' : 'Прізвище'}
                handleInputChange={handleInputChange}
                id='surname'
                error={errors.surname}
              />
            </div>
          </div>
        </PaymentAccordionItem>
        <PaymentAccordionItem
          titleContent={<PaymentCheckboxTitle title='I have promocode' />}
        >
          <div className='reply-form reply-form_payment'>
            <div className='reply-form__fields'>
              <TextInput
                value={inputValues.promo?.value}
                placeholder={language === '' ? 'Promocode' : 'Промокод'}
                handleInputChange={handleInputChange}
                id='promo'
                error={errors.promo}
              />
            </div>
          </div>
        </PaymentAccordionItem>
      </div>
      <textarea
        className='payment-option__textarea'
        placeholder={
          language === 'EN'
            ? 'Leave comment to the order'
            : 'Залишіть коментар до замовлення'
        }
      ></textarea>
    </div>
  );
}
