/* eslint-disable testing-library/no-render-in-setup */
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { TotalCheck } from '../index';

describe('TotalCheck component', () => {
  beforeEach(() => {
    render(
      <TotalCheck
        delivery='free'
        price='1000'
        isActive={false}
        productsNum='1'
      />
    );
  });

  it('component generated', () => {
    expect(screen.getByTestId('total-check')).not.toBeNull();
  });

  it('button is disabled', () => {
    expect(
      screen.getByRole('button', {
        name: /make order/i
      }).disabled
    ).toBe(true);
  });
});
