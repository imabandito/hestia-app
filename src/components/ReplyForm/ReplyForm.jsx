import cn from 'classnames';
import { useState } from 'react';
import { useEffect } from 'react';
import { Button, StarRating } from '../index';

export function ReplyForm({
  extraClass,
  closeReply,
  submitReply,
  stars = false,
  ...props
}) {
  const formClasses = cn('reply-form', extraClass);
  const [nameValue, setNameValue] = useState('');
  const [textValue, setTextValue] = useState('');
  const [canSubmit, setCanSubmit] = useState(false);
  const [userRating, setUserRating] = useState(0);

  const handleCancel = (e) => {
    e.preventDefault();
    closeReply();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitReply({ name: nameValue, text: textValue, rate: userRating });
  };

  const handleNameChange = (e) => {
    setNameValue(e.target.value);
  };

  const handleTextChange = (e) => {
    setTextValue(e.target.value);
  };

  const validate = () => {
    const nameRegex = /^[a-zA-Z ]+$/;
    const isValid = nameRegex.test(nameValue) && textValue.length > 0;

    setCanSubmit(isValid);
  };

  useEffect(() => {
    validate();
  }, [nameValue, textValue]);

  return (
    <form className={formClasses} {...props}>
      <div className='reply-form__fields'>
        <div className='reply-form__field'>
          <label htmlFor='name'>Name:</label>
          <input
            type='text'
            id='name'
            value={nameValue}
            onChange={handleNameChange}
            placeholder='Name'
          />
        </div>
        <div className='reply-form__field'>
          <label htmlFor='answer'>Message:</label>
          <textarea
            value={textValue}
            onChange={handleTextChange}
            placeholder='Message'
          />
        </div>
        {stars && (
          <div className='reply-form__field'>
            <label>Rating:</label>
            <StarRating size='30' onRatingChange={setUserRating} />{' '}
          </div>
        )}
      </div>
      <div className='reply-form__controls'>
        <Button
          text='Submit'
          type='greenTransparent'
          extraClass='file-action-upload'
          onClick={handleSubmit}
          disabled={!canSubmit}
        />
        <Button
          text='Cancel'
          type='maroon'
          extraClass='file-action-cancel'
          onClick={handleCancel}
        />
      </div>
    </form>
  );
}
