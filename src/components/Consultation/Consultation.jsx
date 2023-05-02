import React from 'react';
import { Trans } from 'react-i18next';
import { MessengersList } from '../MessengersList/MessengersList';

export const Consultation = () => (
  <>
    <div className='consultation wrapper'>
      <div className='consultation__textbox'>
        <h2 className='consultation__heading'>
          <Trans>Don't know what to choose?</Trans>
        </h2>
        <p className='consultation__sub-heading'>
          <Trans>
            We will provide you a private consultation in these messengers
          </Trans>
        </p>
      </div>
      <MessengersList />
    </div>
  </>
);
