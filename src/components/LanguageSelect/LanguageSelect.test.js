/* eslint-disable testing-library/no-render-in-setup */
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { LanguageSelect } from '../index';

describe('languageSelect component', () => {
  beforeEach(() => {
    render(<LanguageSelect />);
  });

  it('component rendered', () => {
    expect(screen.getByRole('combobox')).not.toBeNull();
  });

  it('select changes its value after selecting an option', () => {
    userEvent.selectOptions(
      screen.getByRole('combobox'),
      screen.getByRole('option', { name: 'EN' })
    );
    expect(screen.getByRole('option', { name: 'EN' }).selected).toBe(true);
  });
});
