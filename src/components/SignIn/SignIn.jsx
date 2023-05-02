import { useState } from 'react';
import { Trans } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { TextInput, Button } from '..';
import { loginUser } from '../../redux/actions/loginActions';

export function SignIn() {
  const initialValue = {
    email: {
      value: '',
    },
    password: {
      value: '',
    },
  };

  const { language } = useSelector(
    ({ changeLanguageReducer }) => changeLanguageReducer
  );

  const [inputValues, setInputValues] = useState(initialValue);
  const [isIcorrect, setIcorrect] = useState(false);
  const dispatch = useDispatch();

  const handleInputChange = ({ target: { id, value } }) => {
    setInputValues((prev) => ({
      ...prev,
      [id]: { ...prev[id], value },
    }));
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem(inputValues.email.value));
    if (user && user.password === inputValues.password.value) {
      dispatch(loginUser(user));
      localStorage.setItem('loginedUser', user.email);
    } else {
      setIcorrect(true);
    }
  };

  return (
    <form className='reply-form auth-cabinet-form' data-testid='sign-in-form'>
      <TextInput
        value={inputValues.email.value}
        placeholder={language === 'EN' ? 'Email' : 'Пошта'}
        id='email'
        handleInputChange={handleInputChange}
      />
      <TextInput
        value={inputValues.password.value}
        placeholder={language === 'EN' ? 'Password' : 'Пароль'}
        id='password'
        handleInputChange={handleInputChange}
        type='password'
        autoComplete='on'
      />
      {isIcorrect && (
        <p className='auth-cabinet-form__incorrect'>
          <Trans>Wrong email or password</Trans>
        </p>
      )}

      <Button
        type='greenDark'
        text='Sign In'
        extraClass='large'
        onClick={handleSignIn}
      />
    </form>
  );
}
