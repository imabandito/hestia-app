/* eslint-disable testing-library/no-render-in-setup */
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Partners } from './Partners';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Partners', () => {
  beforeEach(() => {
    render(
      <Router>
        <Partners />
      </Router>
    );
  });

  it('Partner logo rendered', () => {
    expect(screen.getAllByRole('img').length).toBe(4);
  });
});
