/* eslint-disable testing-library/no-render-in-setup */
import { render, screen } from '@testing-library/react';
import { PdpSlider } from '../index';

describe('pdpSlier component', () => {
  beforeEach(() => {
    render(<PdpSlider />);
  });

  it('component rendered', () => {
    expect(screen.getByTestId('pdp-slider')).not.toBeNull();
  });
});
