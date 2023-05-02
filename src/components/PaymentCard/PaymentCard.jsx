import { useState } from 'react';

export function PaymentCard() {
  const [inputsData, setInputsData] = useState({
    card: {
      value: '',
      mask: /\d{1,4}/g,
      regex: /^$|\d/,
      max: 4,
      joinSymbol: ' '
    },
    date: {
      value: '',
      mask: /\d{1,2}/g,
      regex: /^$|\d/,
      max: 2,
      joinSymbol: ' / '
    },
    cvv: {
      value: '',
      mask: /\d{1,3}/g,
      regex: /^$|\d/,
      max: 1,
      joinSymbol: ''
    }
  });

  const handleChange = ({ target: { id, value } }) => {
    const matched = value.match(inputsData[id].mask);
    const isValid = inputsData[id].regex.test(value);
    if (matched?.length > inputsData[id].max || !isValid) {
      return;
    }
    const newValue = matched?.join(inputsData[id].joinSymbol) ?? value;
    setInputsData((prev) => ({
      ...prev,
      [id]: { ...prev[id], value: newValue }
    }));
  };

  return (
    <div className='payment-card' data-testid='payment-card'>
      <div className='payment-card-field'>
        <label htmlFor='card'>Card number</label>
        <input
          value={inputsData.card.value}
          type='text'
          id='card'
          placeholder='.... .... .... ....'
          onChange={handleChange}
        />
      </div>
      <div className='payment-card-row'>
        <div className='payment-card-field'>
          <label htmlFor='date'>Expiration date</label>
          <input
            value={inputsData.date.value}
            type='text'
            id='date'
            placeholder='MM / YY'
            onChange={handleChange}
          />
        </div>
        <div className='payment-card-field'>
          <label htmlFor='cvv'>CVV2</label>
          <input
            value={inputsData.cvv.value}
            type='text'
            id='cvv'
            placeholder='...'
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
}
