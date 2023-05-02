/* eslint-disable testing-library/no-render-in-setup */
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { SocialMedia } from '../index';

describe('socialMedia component', () => {
  beforeEach(() => {
    render(<SocialMedia />);
  });

  it('component generated', () => {
    expect(screen.getByTestId('social-media')).not.toBeNull();
  });
});
