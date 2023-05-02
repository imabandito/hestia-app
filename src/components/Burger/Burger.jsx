import cn from 'classnames';
import { useContext, useEffect } from 'react';
import { Logo } from '../UI/Logo/Logo';
import { SocialMedia, Button, LanguageSelect } from '../../components/index';
import {
  categoriesButtons,
  userButtons,
  paymentButtons,
  contactButtons,
} from './BurgerData';
import { Link } from 'react-router-dom';
import { svgIcon } from '../UI/Buttons/Button';
import { ContactsModal } from '../ContactsModal/ContactsModal';
import { ModalContext } from '../../components/RootLayout/RootLayout';
import { setBodyOverflow } from '../../utils/general';
import { Trans } from 'react-i18next';

export function Burger({ openBurger, setOpenBurger }) {
  const { handleOpenSupportModal } = useContext(ModalContext);
  const showBurgerClassNames = cn('burger-container', {
    'burger-container__shown': openBurger,
  });

  useEffect(() => {
    const value = openBurger ? 'hidden' : 'unset';
    setBodyOverflow(value);
  }, [openBurger]);

  return (
    <div className='burger-wrapper' data-testid='modalContext'>
      {openBurger && (
        <div
          className='burger-canvas'
          onClick={() => setOpenBurger(false)}
        ></div>
      )}
      <div className={showBurgerClassNames}>
        <div className='burger'>
          <div className='burger__header'>
            <Link to='/'>
              <Logo onClick={() => setOpenBurger(false)} />
            </Link>
            <div className='burger-closeIcon'>
              <LanguageSelect
                backgroundColor='#fff'
                textColor='#27ae60'
                arrowColor='black'
              />
              <Button
                type='none'
                icon='closeIcon'
                onClick={() => setOpenBurger(false)}
              />
            </div>
          </div>
          {categoriesButtons && (
            <div className='burger__categories burger-item'>
              {categoriesButtons.map((button) => (
                <Link
                  className='burger-item__option'
                  key={button.text}
                  to={button.path}
                  onClick={() => setOpenBurger(false)}
                >
                  {svgIcon?.[button.icon]}
                  <Trans>{button.text}</Trans>
                </Link>
              ))}
            </div>
          )}
          {userButtons && (
            <div className='burger-item'>
              {userButtons.map((button) => (
                <Link
                  className='burger-item__option'
                  key={button.text}
                  to={button.path}
                  onClick={() => setOpenBurger(false)}
                >
                  {svgIcon?.[button.icon]}
                  <Trans>{button.text}</Trans>
                </Link>
              ))}
            </div>
          )}
          {paymentButtons && (
            <div className='burger-item'>
              {paymentButtons.map((button) => (
                <Link
                  className='burger-item__option'
                  key={button.text}
                  to={button.path}
                  onClick={() => setOpenBurger(false)}
                >
                  {svgIcon?.[button.icon]}
                  <Trans>{button.text}</Trans>
                </Link>
              ))}
            </div>
          )}
          {contactButtons && (
            <div className='burger-item burger__about'>
              {contactButtons.map((button) => (
                <Link
                  className='burger-item__option'
                  key={button.text}
                  to={button.path}
                  onClick={() => setOpenBurger(false)}
                >
                  {svgIcon?.[button.icon]}
                  <Trans>{button.text}</Trans>
                </Link>
              ))}
            </div>
          )}
        </div>
        <div className='burger-footer'>
          <Button
            clickHandler={handleOpenSupportModal}
            text='Support'
            extraClass='support'
          />
          <ContactsModal />
          <SocialMedia type={'black'} showText={true} />
        </div>
      </div>
    </div>
  );
}
