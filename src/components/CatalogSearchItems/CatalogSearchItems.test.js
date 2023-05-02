/* eslint-disable testing-library/no-render-in-setup */
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import { CatalogSearchItems } from './CatalogSearchItems';

describe('catalog items component', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <CatalogSearchItems />
      </Provider>
    );
  });

  it('component is not empty', () => {
    expect(screen.getByTestId('search-items').children).not.toBeNull();
  });
});
