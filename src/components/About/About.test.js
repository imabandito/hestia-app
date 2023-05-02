/* eslint-disable testing-library/no-render-in-setup */
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { About } from './About';

describe('About component', () => {
  beforeEach(() => {
    render(<About />);
  });

  it('component rendered', () => {
    expect(screen.getByTestId('about-component')).not.toBeNull();
  });
});
