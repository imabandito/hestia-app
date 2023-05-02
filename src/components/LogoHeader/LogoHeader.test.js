/* eslint-disable testing-library/no-render-in-setup */
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { LogoHeader } from '../index';
import { BrowserRouter as Router } from 'react-router-dom';

describe('languageSelect component', () => {
  beforeEach(() => {
    render(
      <Router>
        <LogoHeader />
      </Router>
    );
  });

  it('component rendered', () => {
    expect(screen.getByTestId('header-logo')).not.toBeNull();
  });
});
