/* eslint-disable testing-library/no-render-in-setup */
import '@testing-library/jest-dom';
import { recentlyViewedItems } from './RecentlyViewedItemData';
import { RecentlyViewedItem } from './RecentlyViewedItem';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

describe('recently viewed item component', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <RecentlyViewedItem itemData={recentlyViewedItems[0]} />
      </BrowserRouter>
    );
  });

  it('component rendered', () => {
    expect(screen.getByRole('button')).not.toBeNull();
  });
});
