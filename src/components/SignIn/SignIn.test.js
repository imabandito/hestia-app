/* eslint-disable testing-library/no-render-in-setup */
import '@testing-library/jest-dom';
import { SignIn } from '../index';
import { fireEvent, render, screen, within } from '@testing-library/react';
import { store } from '../../redux/store';
import { Provider } from 'react-redux';

describe('SignIn component', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <SignIn />
      </Provider>
    );
  });

  it('component rendered', () => {
    expect(screen.getByTestId('sign-in-form')).not.toBeNull();
  });

  it("doesn't login with empty data", () => {
    const view = screen.getByTestId('sign-in-form');
    const loginButton = within(view).getByRole('button', {
      name: /sign in/i
    });
    fireEvent.click(loginButton);
    expect(screen.queryByTestId('auth-cabinet')).not.toBeInTheDocument();
  });

  it('login works', () => {
    expect(store.getState().loginReducer.user).toBeNull();

    Object.defineProperty(window, 'localStorage', {
      value: {
        getItem: jest.fn(() =>
          JSON.stringify({
            email: 'testmail@mail.com',
            experience: 'sexperience',
            name: 'Fake Name',
            password: 'qqqqqqqq',
            surname: 'Fake Surname'
          })
        ),
        setItem: jest.fn(() => null)
      },
      writable: true
    });

    const view = screen.getByTestId('sign-in-form');
    const loginButton = within(view).getByRole('button', {
      name: /sign in/i
    });
    const emailInput = within(view).getByRole('textbox');
    const passwordInput = screen.getByPlaceholderText(/password/i);
    fireEvent.change(emailInput, { target: { value: 'testmail@mail.com' } });
    fireEvent.change(passwordInput, { target: { value: 'qqqqqqqq' } });
    fireEvent.click(loginButton);

    expect(store.getState().loginReducer.user).not.toBeNull();
  });
});
