import { useState, useEffect } from 'react';
import { Trans } from 'react-i18next';
import cn from 'classnames';
import { Button } from '..';
import { useSelector } from 'react-redux';

export function ContactVerification({ extraClass, setIsValid = () => {} }) {
  const formClasses = cn('reply-form', extraClass);

  const { language } = useSelector(
    ({ changeLanguageReducer }) => changeLanguageReducer
  );

  const buttonsData = [
    {
      id: '1',
      text: 'New customer',
    },
    {
      id: '2',
      text: 'Regular customer',
    },
  ];
  const initialValue = {
    name: {
      value: '',
      regex: /^[a-zA-Z ]{3,}$/,
    },
    surname: {
      value: '',
      regex: /^[a-zA-Z ]{3,}$/,
    },
    phone: {
      value: '',
      regex:
        /^(?:\+)?([0-9]{2})[-. ]?([0-9]{3})[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
    },
  };
  const phonePrefix = '+38';

  const [activeTab, setActiveTab] = useState('1');
  const [inputValues, setInputValues] = useState(initialValue);
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

  const handlePhoneClick = () => {
    if (!inputValues.phone.value) {
      setInputValues((prev) => ({
        ...prev,
        phone: { ...prev.phone, value: phonePrefix },
      }));
    }
  };

  const handleCustomerClick = (e) => {
    e.preventDefault();
    setActiveTab(e.target.id);
  };

  useEffect(() => {
    const valid = Object.keys(inputValues).every((key) => errors[key]);
    setIsValid({ contacts: valid });
  }, [errors]);

  return (
    <form className={formClasses} data-testid='contact-verification'>
      <div className='contact-verification__users'>
        {buttonsData.map(({ id, text }) => (
          <Button
            type='greenTransparent'
            text={text}
            id={id}
            extraClass={`${
              activeTab === id
                ? 'contact-verification_active'
                : 'contact-verification'
            }`}
            onClick={handleCustomerClick}
            key={id}
          />
        ))}
      </div>
      {Object.keys(inputValues).length > 0 && (
        <div className='reply-form__fields'>
          <div className='reply-form__field'>
            <label htmlFor='name'>
              <Trans>Name</Trans>
            </label>
            <input
              type='text'
              id='name'
              value={inputValues.name.value}
              onChange={handleInputChange}
              placeholder={language === 'EN' ? 'Name' : 'Ім‘я'}
              className={
                !errors.name && errors.name !== undefined
                  ? 'reply-form_invalid-input'
                  : ''
              }
            />
          </div>
          <div className='reply-form__field'>
            <label htmlFor='surname'>
              <Trans>Surname</Trans>
            </label>
            <input
              type='text'
              id='surname'
              value={inputValues.surname.value}
              onChange={handleInputChange}
              placeholder={language === 'EN' ? 'Surname' : 'Прізвище'}
              className={
                !errors.surname && errors.surname !== undefined
                  ? 'reply-form_invalid-input'
                  : ''
              }
            />
          </div>
          <div className='reply-form__field'>
            <label htmlFor='phone'>
              <Trans>Phone number:</Trans>
            </label>
            <input
              type='tel'
              id='phone'
              value={inputValues.phone.value}
              onChange={handleInputChange}
              onClick={handlePhoneClick}
              placeholder='+38 --- --- ----'
              className={
                !errors.phone && errors.phone !== undefined
                  ? 'reply-form_invalid-input'
                  : ''
              }
            />
          </div>
        </div>
      )}
    </form>
  );
}
