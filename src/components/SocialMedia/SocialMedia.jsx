import { Trans } from 'react-i18next';
import {
  FacebookIcon,
  InstagramIcon,
  YoutubeIcon,
  ViberIcon,
  TelegramIcon,
} from '../UI/indexIcon';

export function SocialMedia({ type, showText }) {
  const iconsColor = type ? `social-media__icons_${type}` : '';
  return (
    <div className='social-media' data-testid='social-media'>
      {showText && (
        <p className='social-media__text'>
          <Trans>Our social networks</Trans>
        </p>
      )}
      <div className={`social-media__icons ${iconsColor}`}>
        <a
          href='https://www.facebook.com/'
          target='_blank'
          rel='noreferrer'
          aria-label='facebook page'
        >
          <FacebookIcon />
        </a>
        <a
          href='https://www.instagram.com/'
          target='_blank'
          rel='noreferrer'
          aria-label='intagram page'
        >
          {' '}
          <InstagramIcon />
        </a>
        <a
          href='https://www.youtube.com/'
          target='_blank'
          rel='noreferrer'
          aria-label='youtube page'
        >
          {' '}
          <YoutubeIcon />
        </a>

        <a
          href='https://www.viber.com/en/'
          target='_blank'
          rel='noreferrer'
          aria-label='viber page'
        >
          {' '}
          <ViberIcon />
        </a>

        <a
          href='https://web.telegram.org/k/'
          target='_blank'
          rel='noreferrer'
          aria-label='telegram page'
        >
          {' '}
          <TelegramIcon />
        </a>
      </div>
    </div>
  );
}
