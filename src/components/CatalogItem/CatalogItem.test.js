/* eslint-disable testing-library/no-render-in-setup */
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { CatalogItem } from './CatalogItem';
import { productItems } from './CatalogItemData';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from '../../redux/store';
import { Provider } from 'react-redux';

describe('catalogItem component', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Router>
          <CatalogItem item={productItems[0]} />
        </Router>
      </Provider>
    );
  });

  it('component rendered', () => {
    expect(screen.getByTestId('product-item-1')).not.toBeNull();
  });

  it('image changes after click on color', () => {
    expect(screen.getByRole('img', { name: /brown sofa/i })).toBeTruthy();
    expect(screen.queryByRole('img', { name: /yellow sofa/i })).toBeFalsy();
    fireEvent.click(screen.getByTestId('color-1'));
    expect(screen.getByTestId('color-1')).toBeChecked();
    expect(screen.queryByRole('img', { name: /brown sofa/i })).toBeFalsy();
  });

  it('item added to redux store', () => {
    const button = screen.getByRole('button', {
      name: /shopcart/i
    });

    expect(
      Object.getOwnPropertyNames(store.getState().goodsReducer.orders)
        .length === 0
    ).toBe(true);

    fireEvent.click(button);

    expect(
      Object.getOwnPropertyNames(store.getState().goodsReducer.orders).length >
        0
    ).toBe(true);
  });
});
