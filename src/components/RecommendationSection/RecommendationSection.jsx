import React from 'react';
import { Trans } from 'react-i18next';
import { RecentlyViewedSlider } from '..';
import { recommendationItems } from './RecommendationSectionData';

export function RecommendationSection() {
  return (
    <div className='recommendation'>
      <div
        className='wrapper recommendation__box'
        data-testid='recommendation-section'
      >
        <div className='recommendation__textbox'>
          <h2 className='recently-viewed-heading'>
            <Trans>Recommended items</Trans>
          </h2>
        </div>
        <RecentlyViewedSlider data={recommendationItems} />
      </div>
    </div>
  );
}
