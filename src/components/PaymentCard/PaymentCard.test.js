/* eslint-disable testing-library/no-render-in-setup */
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { PaymentCard } from './PaymentCard';
import userEvent from '@testing-library/user-event';

describe('PaymentCard', () => {
  beforeEach(() => {
    render(<PaymentCard />);
  });

  it('PaymentCard rendered', () => {
    expect(screen.getByTestId('payment-card')).toBeInTheDocument();
  });

  it("can't type letter in card input", () => {
    const cardInput = screen.getByRole('textbox', {
      name: /card number/i
    });

    userEvent.type(cardInput, 'test');
    expect(cardInput.value).toBe('');
  });

  it('date mask is working', () => {
    const dateInput = screen.getByRole('textbox', {
      name: /expiration date/i
    });

    userEvent.type(dateInput, '1212');
    expect(dateInput.value).toBe('12 / 12');
  });

  it("can't type cvv longer than 3", () => {
    const cvvInput = screen.getByRole('textbox', {
      name: /cvv2/i
    });

    userEvent.type(cvvInput, '12345');
    expect(cvvInput.value).toBe('123');
  });
});
