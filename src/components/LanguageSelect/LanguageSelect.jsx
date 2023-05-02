import smallArrowDownWhite from '../../assets/images/smallArrowDownWhite.png';
import smallArrowDownBlack from '../../assets/images/smallArrowDownBlack.png';
import { useState } from 'react';
import i18n from '../../i18n';
import { useDispatch, useSelector } from 'react-redux';
import { changeLanguage } from '../../redux/actions/changeLanguage';

export function LanguageSelect({ backgroundColor, textColor, arrowColor }) {
  const languages = ['EN', 'UA'];
  const dispatch = useDispatch();
  const { language } = useSelector(
    ({ changeLanguageReducer }) => changeLanguageReducer
  );

  function changeHandler(e) {
    i18n.changeLanguage(e.target.value.toLowerCase());
    dispatch(changeLanguage(e.target.value));
  }

  const styles = {
    backgroundImage:
      arrowColor === 'black'
        ? `url(${smallArrowDownBlack})`
        : `url(${smallArrowDownWhite})`,
    backgroundColor: backgroundColor,
    color: textColor,
  };

  return (
    <>
      <select
        onChange={changeHandler}
        value={language}
        style={styles}
        className='select'
      >
        {languages.map((language, index) => (
          <option value={language} key={index}>
            {languages[index]}
          </option>
        ))}
      </select>
    </>
  );
}
