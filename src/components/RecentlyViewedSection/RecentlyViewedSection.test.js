/* eslint-disable testing-library/no-render-in-setup */

import '@testing-library/jest-dom';
import { RecentlyViewedSection } from './RecentlyViewedSection';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { recentlyViewedItems } from '../RecentlyViewedItem/data-recentlyViewedItem';

describe('recently viewed item component', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <RecentlyViewedSection />
      </MemoryRouter>
    );
  });

  it('component rendered', () => {
    expect(screen.getByTestId('recently-viewed-section')).toBeInTheDocument();
  });

  it('correct text in subheading', () => {
    const subheading = screen.getByText(/viewed\s\d/i);
    expect(subheading).toHaveTextContent(
      `Viewed ${recentlyViewedItems.length}`
    );
  });
});
