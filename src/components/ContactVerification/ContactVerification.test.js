/* eslint-disable testing-library/no-render-in-setup */
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { ContactVerification } from './ContactVerification';

describe('ContactVerification component', () => {
  const setIsValid = jest.fn();
  beforeEach(() => {
    render(<ContactVerification setIsValid={setIsValid} />);
  });

  it('component rendered', () => {
    expect(screen.getAllByTestId('contact-verification')).not.toBeNull();
  });

  it('name validation works', () => {
    const input = screen.getByRole('textbox', {
      name: /name: surname: phone number:/i
    });

    expect(input.classList.contains('reply-form_invalid-input')).toBe(false);
    fireEvent.change(input, { target: { value: '12' } });
    expect(input.classList.contains('reply-form_invalid-input')).toBe(true);
    fireEvent.change(input, { target: { value: 'Ilko' } });
    expect(input.classList.contains('reply-form_invalid-input')).toBe(false);
  });
});
