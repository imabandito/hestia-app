import React from 'react';
import { Trans } from 'react-i18next';
import { topics } from '../../utils/constants';

export const Topics = () => {
  return (
    <div className='topics wrapper'>
      <h1 className='topics__heading'>
        <Trans>Topics</Trans>
      </h1>
      <div className='topics__box'>
        {topics.map((topic) => {
          return (
            <div key={topic} className='topics__topic'>
              <Trans>{topic}</Trans>
            </div>
          );
        })}
      </div>
    </div>
  );
};
