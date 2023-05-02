import { useEffect } from 'react';
import { useState } from 'react';
import { Trans } from 'react-i18next';
import { deliveryOptionsData } from './DeliveryOptionsData';

export function DeliveryOptions({ setIsValid }) {
  const [optionInputs, setOptionInputs] = useState({});
  const [currentId, setCurrentId] = useState(null);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (currentId) {
      validate();
    }
  }, [optionInputs, currentId]);

  const handleOptionChange = ({ target: { id } }) => {
    setCurrentId(id);
  };

  const handleInputChange = ({ target: { value, id, placeholder } }) => {
    setOptionInputs((prev) => ({
      ...prev,
      [currentId]: { ...prev[currentId], [placeholder]: value },
    }));
  };

  const validate = () => {
    const option = deliveryOptionsData.find(({ id }) => id === currentId);
    if (!option.inputs) {
      setIsValid({ delivery: true });
      return;
    }
    const isValid = option.inputs?.every(({ name, id, regex }) => {
      const inputValue = optionInputs[currentId]?.[name];

      if (inputValue === undefined) {
        return false;
      }
      const res = regex.test(inputValue);
      setErrors((prev) => ({
        ...prev,
        [id]: res,
      }));

      return res;
    });
    setIsValid({ delivery: isValid });
  };

  return (
    <form className='delivery-options' data-testid='delivery-options'>
      {deliveryOptionsData.map((option) => (
        <div className='delivery-field' key={option.id}>
          <input
            type='radio'
            name='delivery-options'
            id={option.id}
            className='delivery-field__radio-input'
            onClick={handleOptionChange}
          />
          <label htmlFor={option.id} className='delivery-field__label'>
            <div className='delivery-field__row'>
              <div className='delivery-field__circle '></div>
              <div className='delivery-field__info'>
                <p className='delivery-field__way'>
                  <Trans>{option.name}</Trans>
                </p>
                <p className='delivery-field__price'>
                  {option.price} {option.price !== 'free' && 'uah.'}
                </p>
              </div>
            </div>
            <div className='delivery-field__inputs'>
              {option.inputs?.map((input) => (
                <input
                  type='text'
                  placeholder={input.name}
                  key={input.id}
                  value={optionInputs[option.id]?.[input.name] || ''}
                  onChange={handleInputChange}
                  id={input.id}
                  className={
                    !errors[input.id] && errors[input.id] !== undefined
                      ? 'delivery-field_invalid-input'
                      : ''
                  }
                />
              ))}
              {!option.inputs && (
                <>
                  <div className='delivery-field__address'>
                    <Trans>{option.address}</Trans>
                  </div>
                  <div className='delivery-field__time'>
                    <Trans>{option.workimgTime}</Trans>
                  </div>
                </>
              )}
            </div>
          </label>
        </div>
      ))}
    </form>
  );
}
