import React from 'react';
import { RecentlyViewedSlider } from '../RecentlyViewedSlider/RecentlyViewedSlider';
import { recentlyViewedItems } from '../RecentlyViewedItem/RecentlyViewedItemData';
import { Trans } from 'react-i18next';

export function RecentlyViewedSection() {
  return (
    <div className='background-fill_greyLight'>
      <div
        className='wrapper recently-viewed-items-box'
        data-testid='recently-viewed-section'
      >
        <div className='recently-viewed-items-textbox'>
          <h2 className='recently-viewed-heading'>
            <Trans>Recently viewed</Trans>
          </h2>
          <p className='recently-viewed-subheading'>
            <Trans>Viewed</Trans> {recentlyViewedItems.length}
          </p>
        </div>
        <RecentlyViewedSlider data={recentlyViewedItems} />
      </div>
    </div>
  );
}
