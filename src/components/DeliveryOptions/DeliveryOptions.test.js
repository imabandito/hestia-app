/* eslint-disable testing-library/no-render-in-setup */
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { DeliveryOptions } from './DeliveryOptions';

describe('delivery options component', () => {
  beforeEach(() => {
    render(<DeliveryOptions />);
  });

  it('component rendered', () => {
    expect(screen.getByTestId('delivery-options')).not.toBeNull();
  });
});
