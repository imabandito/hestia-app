/* eslint-disable testing-library/no-render-in-setup */
import '@testing-library/jest-dom';
import { Reviews } from '../index';
import { fireEvent, render, screen } from '@testing-library/react';
import { reviewers } from '../Review/ReviewData';
import { BrowserRouter } from 'react-router-dom';

describe('Review component', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Reviews reviews={reviewers} />
      </BrowserRouter>
    );
  });

  it('component rendered', () => {
    expect(screen.getByTestId('questions-reviews')).not.toBeNull();
  });

  it('proper amount of pages', () => {
    expect(screen.getAllByTestId('pagination-page')).toHaveLength(2);
  });
});
