import { Trans } from 'react-i18next';
import { Link } from 'react-router-dom';
import { LanguageSelect, SocialMedia } from '../../components/index';

export const NavMenu = () => {
  return (
    <div className='nav-menu'>
      <div className='wrapper wrapper__nav-menu'>
        <nav id='main-nav' className='nav-menu__box'>
          <Link
            to='/discounts'
            className='nav-menu__link'
            aria-label='Discounts'
          >
            <Trans>Discounts</Trans>
          </Link>
          <Link to='/about-us' className='nav-menu__link' aria-label='About us'>
            <Trans>About us</Trans>
          </Link>
          <Link
            to='/delivery-and-payment'
            className='nav-menu__link'
            aria-label='Delivery and payment'
          >
            <Trans>Delivery and Payment</Trans>
          </Link>
          <Link to='/' className='nav-menu__link' aria-label='Warranty'>
            <Trans>Warranty</Trans>
          </Link>
          <Link to='/' className='nav-menu__link' aria-label='Blog'>
            <Trans>Blog</Trans>
          </Link>
          <Link to='/contacts' className='nav-menu__link' aria-label='Contacts'>
            <Trans>Contacts</Trans>
          </Link>
        </nav>
        <div className='nav-menu__other'>
          <LanguageSelect
            backgroundColor='#000'
            textColor='#fff'
            arrowColor='white'
          />
          <SocialMedia type='white' />
          <a className='nav-menu__link' href='/' aria-label='sign in'>
            <Trans>Sign in</Trans>
          </a>
        </div>
      </div>
    </div>
  );
};
