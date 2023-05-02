import cn from 'classnames';
import { useContext } from 'react';
import { ModalContext } from '../../components/RootLayout/RootLayout';
import {
  CloseIcon,
  ColorInstagramIcon,
  ColorMessengerIcon,
  ColorTelegramIcon,
  ColorViberIcon,
  PhoneIcon
} from '../UI/indexIcon';

export function ContactsModal() {
  const { openSupportModal, handleOpenSupportModal } = useContext(ModalContext);
  const classNamesBox = cn('contacts-modal__box', {
    'contacts-modal__box_active': openSupportModal
  });

  return (
    <div className='contacts-modal'>
      {openSupportModal && (
        <div
          onClick={() => {
            handleOpenSupportModal();
          }}
          className='contacts-modal__canvas'
        ></div>
      )}
      <div className={classNamesBox}>
        <div
          onClick={() => {
            handleOpenSupportModal();
          }}
          className='contacts-modal__close-button'
        >
          <CloseIcon />
        </div>
        <a
          href='https://www.instagram.com'
          target='_blank'
          rel='noreferrer'
          className='contacts-modal__item'
        >
          <ColorInstagramIcon />
          <div className='contacts-modal__textbox'>
            <h3 className='contacts-modal__item-title'>Instagram</h3>
          </div>
        </a>
        <a
          href='https://www.telegram.org'
          target='_blank'
          rel='noreferrer'
          className='contacts-modal__item'
        >
          <ColorTelegramIcon />
          <div className='contacts-modal__textbox'>
            <h3 className='contacts-modal__item-title'>Telegram</h3>
          </div>
        </a>
        <a
          href='https://www.viber.com'
          target='_blank'
          rel='noreferrer'
          className='contacts-modal__item'
        >
          <ColorViberIcon />
          <div className='contacts-modal__textbox'>
            <h3 className='contacts-modal__item-title'>Viber</h3>
          </div>
        </a>
        <a
          href='https://www.messenger.com'
          target='_blank'
          rel='noreferrer'
          className='contacts-modal__item'
        >
          <ColorMessengerIcon />
          <div className='contacts-modal__textbox'>
            <h3 className='contacts-modal__item-title'>Messenger</h3>
          </div>
        </a>
        <a href='tel::0445999666' className='contacts-modal__item'>
          <PhoneIcon />
          <div className='contacts-modal__textbox'>
            <h3 className='contacts-modal__item-title'>044-5-999-666</h3>
            <p className='contacts-modal__item-text'>
              Free of charge within Ukraine
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}
