/* eslint-disable testing-library/no-render-in-setup */
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { discountData } from './DiscountData';
import { DiscountItem } from './DiscountItem';

describe('comment component', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <DiscountItem data={discountData[0]} />
      </BrowserRouter>
    );
  });

  it('component rendered', () => {
    expect(
      screen.getByRole('img', {
        name: /discount/i
      })
    ).not.toBeNull();
  });
});
