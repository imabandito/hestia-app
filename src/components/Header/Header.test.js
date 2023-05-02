/* eslint-disable testing-library/no-render-in-setup */
import { fireEvent, render, screen } from '@testing-library/react';
import { Header } from './Header';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';

describe('Header', () => {
  beforeEach(() => {
    render(
      <Router>
        <Header />
      </Router>
    );
  });

  it('component rendered', () => {
    expect(screen.getByRole('banner')).not.toBeNull();
  });

  it('search field hidden', () => {
    expect(screen.queryByRole('textbox')).not.toHaveClass('search-input');
  });

  it('search field hidden visible', () => {
    expect(screen.queryByRole('textbox')).not.toHaveClass('search-input');
    fireEvent.click(screen.getByTestId('iconSearch'));
    expect(screen.getByRole('textbox')).toHaveClass('search-input');
  });
});
