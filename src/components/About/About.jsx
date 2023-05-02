import { nightStand } from '../../assets/images/indexImages';
import { Link } from 'react-router-dom';
import { Arrow } from '../UI/indexIcon';
import { Trans } from 'react-i18next';

export function About() {
  return (
    <div className='about' data-testid='about-component'>
      <div>
        <img src={nightStand.src} alt={nightStand.alt} />
      </div>
      <h3 className='about__title'>
        <Trans>A world of Inspiration for your home</Trans>
      </h3>
      <Link to='about-us'>
        <div className='about__btn'>
          <Trans>About Hestia</Trans>
          <Arrow color='#219653' />
        </div>
      </Link>
    </div>
  );
}
