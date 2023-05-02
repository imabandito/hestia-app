/* eslint-disable testing-library/no-render-in-setup */
import { render, screen } from '@testing-library/react';
import { Footer } from '../index';
import { ModalContext } from '../RootLayout/RootLayout';

describe('footer component', () => {
  beforeEach(() => {
    const handleOpenSupportModal = () => {};

    render(
      <ModalContext.Provider value={{ handleOpenSupportModal }}>
        <Footer />
      </ModalContext.Provider>
    );
  });

  it('component generated', () => {
    expect(screen.getByRole('button')).not.toBeNull();
  });
});
