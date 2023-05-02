import { Trans } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { HomeLogo } from '../../components';
import { SadFace } from '../../components/UI/indexIcon';

export function NotFound() {
  const { language } = useSelector(
    ({ changeLanguageReducer }) => changeLanguageReducer
  );
  return (
    <div className='wrapper not-found'>
      <Link to={'/'}>
        <HomeLogo />
      </Link>
      <div className='not-found__container'>
        <h1>
          <Trans>Sorry, we can't find the page...</Trans>
        </h1>
        <p>
          <Trans>Return to the main</Trans>
          &nbsp;
          <Link to='/'>
            <Trans>page</Trans>
          </Link>
        </p>
        <SadFace />
      </div>
    </div>
  );
}
