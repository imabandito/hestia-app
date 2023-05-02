/* eslint-disable testing-library/no-render-in-setup */

import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { RecommendationSection } from './RecommendationSection';

describe('recently viewed item component', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <RecommendationSection />
      </MemoryRouter>
    );
  });

  it('component rendered', () => {
    expect(screen.getByTestId('recommendation-section')).toBeInTheDocument();
  });
});
