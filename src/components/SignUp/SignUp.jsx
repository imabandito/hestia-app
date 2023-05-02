import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextInput, Button } from '..';
import { loginUser } from '../../redux/actions/loginActions';
import { initialValues } from './SignUpInputValues';

export function SignUp() {
  const [errors, setErrors] = useState({});
  const [inputValues, setInputValues] = useState(initialValues);
  const [isDisabled, setIsDisabled] = useState(true);
  const dispatch = useDispatch();

  const { language } = useSelector(
    ({ changeLanguageReducer }) => changeLanguageReducer
  );

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

  const handleSignUp = (e) => {
    e.preventDefault();
    const shortUserData = Object.keys(inputValues).reduce(
      (obj, key) => ({
        ...obj,
        [key]: inputValues[key].value,
      }),
      {}
    );
    dispatch(loginUser(shortUserData));
    localStorage.setItem(shortUserData.email, JSON.stringify(shortUserData));
    localStorage.setItem('loginedUser', shortUserData.email);
  };

  useEffect(() => {
    const isValid = Object.keys(inputValues).every(
      (key) =>
        errors[key] || (inputValues[key].value && errors[key] === undefined)
    );
    setIsDisabled(!isValid);
  }, [errors]);

  return (
    <form className='reply-form auth-cabinet-form'>
      <TextInput
        value={inputValues.email.value}
        placeholder={language === 'EN' ? 'Email' : 'Пошта'}
        id='email'
        handleInputChange={handleInputChange}
        error={errors.email}
      />
      <TextInput
        value={inputValues.name.value}
        placeholder={language === 'EN' ? 'Name' : 'Ім‘я'}
        id='name'
        handleInputChange={handleInputChange}
        error={errors.name}
      />
      <TextInput
        value={inputValues.surname.value}
        placeholder={language === 'EN' ? 'Surname' : 'Прізвище'}
        id='surname'
        handleInputChange={handleInputChange}
        error={errors.surname}
      />
      <TextInput
        value={inputValues.password.value}
        placeholder={language === 'EN' ? 'Password' : 'Пароль'}
        id='password'
        handleInputChange={handleInputChange}
        type='password'
        error={errors.password}
        autoComplete='on'
      />
      <TextInput
        value={inputValues.experience.value}
        placeholder={language === 'EN' ? 'Experience' : 'Досвід'}
        id='experience'
        handleInputChange={handleInputChange}
        type='text'
        error={errors.experience}
      />
      <Button
        type='greenDark'
        text='Sign Up'
        extraClass='large'
        disabled={isDisabled}
        onClick={handleSignUp}
      />
    </form>
  );
}
