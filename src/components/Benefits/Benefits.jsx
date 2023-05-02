import { TruckIcon } from '../UI/TruckIcon/TruckIcon';
import { AwardIcon } from '../UI/AwardIcon/AwardIcon';
import { PrivacyIcon } from '../UI/PrivacyIcon';
import { Trans } from 'react-i18next';

export function Benefits() {
  return (
    <div className='benefits' data-testid='benefits'>
      <div className='wrapper  benefits__wrapper'>
        <div className='benefits__item'>
          <div className='benefits-icon'>
            <TruckIcon />
          </div>
          <div className='benefits-content'>
            <h4 className='benefits-content__header'>
              <Trans>Delivery</Trans>
            </h4>
            <p className='benefits-content__text'>
              <Trans>
                Delivery to the address or to the Nova Poshta and Ukrposhta
                branches. Fast delivery in Kyiv.
              </Trans>
            </p>
          </div>
        </div>
        <div className='benefits__item'>
          <div className='benefits-icon'>
            <PrivacyIcon />
          </div>
          <div className='benefits-content'>
            <h4 className='benefits-content__header'>
              <Trans>Privacy</Trans>
            </h4>
            <p className='benefits-content__text'>
              <Trans>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus aliquam eu, sit vestibulum ultricies sed adipiscing.
              </Trans>
            </p>
          </div>
        </div>
        <div className='benefits__item'>
          <div className='benefits-icon'>
            <AwardIcon />
          </div>
          <div className='benefits-content'>
            <h4 className='benefits-content__header'>
              <Trans>Quality guarantee</Trans>
            </h4>
            <p className='benefits-content__text'>
              <Trans>
                We carefully select our range of products and provide a
                guarantee for toys for a period of 1 to 12 months.
              </Trans>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
