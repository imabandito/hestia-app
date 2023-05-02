import { Trans } from 'react-i18next';

export function TextInput({
  value = '',
  handleInputChange,
  placeholder,
  id,
  error,
  type = 'text',
  ...props
}) {
  return (
    <div className='reply-form__field'>
      <label htmlFor={id}>
        <Trans>{placeholder}</Trans>
      </label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={handleInputChange}
        placeholder={placeholder}
        className={
          !error && error !== undefined ? 'reply-form_invalid-input' : ''
        }
        {...props}
      />
    </div>
  );
}
