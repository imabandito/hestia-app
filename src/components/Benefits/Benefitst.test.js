/* eslint-disable testing-library/no-render-in-setup */
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Benefits } from './Benefits';

describe('Benefits', () => {
  beforeEach(() => {
    render(<Benefits />);
  });
  it('generated content', () => {
    expect(screen.getByTestId('benefits')).not.toBeNull();
  });
});
