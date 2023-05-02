import { useState } from 'react';
import cn from 'classnames';
import { Button } from '../UI/Buttons/Button';
import { Trans } from 'react-i18next';

export function InfoBanner({ text }) {
  const [showInfoBanner, setShowInfoBanner] = useState(true);

  const infoBannerClasses = cn('info-banner', {
    'info-banner_closed': !showInfoBanner,
  });

  return (
    <div className={infoBannerClasses} data-testid='info-banner'>
      {text && (
        <p className='info-banner__text'>
          <Trans>{text}</Trans>
        </p>
      )}
      <Button
        icon='smallCloseIcon'
        type='none'
        onClick={() => setShowInfoBanner(false)}
        extraClass='info-banner-closeIcon'
      />
    </div>
  );
}
