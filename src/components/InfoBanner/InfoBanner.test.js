/* eslint-disable testing-library/no-render-in-setup */
import '@testing-library/jest-dom';
import { InfoBanner } from '../index';
import { fireEvent, render, screen } from '@testing-library/react';

describe('infoBanner component', () => {
  beforeEach(() => {
    render(<InfoBanner />);
  });

  it('component rendered', () => {
    expect(screen.getByTestId('info-banner')).not.toBeNull();
  });

  it('banner closed', () => {
    fireEvent.click(screen.getByRole('button'));
    expect(screen.getByTestId('info-banner')).toHaveClass('info-banner_closed');
  });
});
