/* eslint-disable testing-library/no-render-in-setup */
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { PaymentOption } from './PaymentOption';
import { paymentData } from '../../components/PaymentOption/PaymentOptionData';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
describe('PaymentOption', () => {
  const setIsValid = jest.fn();
  beforeEach(() => {
    render(
      <Provider store={store}>
        <PaymentOption options={paymentData} setIsValid={setIsValid} />
      </Provider>
    );
  });

  it('Component rendered', () => {
    expect(screen.getByTestId('payment-option')).not.toBeNull();
  });

  it('Component validated', () => {
    const button = screen.getByText(/payment upon receipt of goods/i);
    fireEvent.click(button);
    expect(setIsValid).toHaveBeenCalled();
  });
});
