/* eslint-disable testing-library/no-render-in-setup */
import '@testing-library/jest-dom';
import { PersonalCabinet } from '../index';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';

describe('Personal Cabinet component', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <PersonalCabinet />
      </Provider>
    );
  });

  it('component rendered', () => {
    expect(screen.getByTestId('auth-cabinet')).not.toBeNull();
  });

  it('Removed loginedUser from localStorage', () => {
    Object.defineProperty(window, 'localStorage', {
      value: {
        removeItem: jest.fn(() => null)
      },
      writable: true
    });
    const signOut = screen.getByRole('button', {
      name: /sign out/i
    });
    fireEvent.click(signOut);
    expect(window.localStorage.removeItem).toHaveBeenCalled();
  });
});
