/* eslint-disable testing-library/no-render-in-setup */
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { Burger } from '../index';
import { ModalContext } from '../RootLayout/RootLayout';

describe('burger component', () => {
  beforeEach(() => {
    const handleOpenSupportModal = () => {};

    render(
      <ModalContext.Provider value={{ handleOpenSupportModal }}>
        <Router>
          <Burger />
        </Router>
      </ModalContext.Provider>
    );
  });

  it('component rendered', () => {
    expect(screen.getAllByRole('link')).not.toBeNull();
  });
});
