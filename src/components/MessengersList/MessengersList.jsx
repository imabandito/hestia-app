import React from 'react';
import {
  ColorInstagramIcon,
  ColorMessengerIcon,
  ColorTelegramIcon,
  ColorViberIcon
} from '../UI/indexIcon';

export function MessengersList() {
  return (
    <div className='messenger-list'>
      <a target='_blank' rel='noreferrer' href='https://www.instagram.com/'>
        <ColorInstagramIcon />
      </a>

      <a target='_blank' rel='noreferrer' href='https://telegram.org/'>
        <ColorTelegramIcon />
      </a>

      <a target='_blank' rel='noreferrer' href='https://www.viber.com/en/'>
        <ColorViberIcon />
      </a>

      <a target='_blank' rel='noreferrer' href='https://www.messenger.com/'>
        <ColorMessengerIcon />
      </a>
    </div>
  );
}
