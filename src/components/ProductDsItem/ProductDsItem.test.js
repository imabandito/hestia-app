/* eslint-disable testing-library/no-render-in-setup */
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import { ProductDsItem } from './ProductDsItem';
import { dsTestProduct } from '../../components/ProductDsItem/ProductDsItemData';
import { store } from '../../redux/store';
import { BrowserRouter } from 'react-router-dom';

describe('productDsItem component', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <ProductDsItem productItem={dsTestProduct} />
        </BrowserRouter>
      </Provider>
    );
  });

  it('component rendered', () => {
    expect(screen.getByRole('img', { name: /pretty bedroom/i })).not.toBeNull();
  });

  // it('proper amount of tags rendered', () => {
  //   expect(screen.getAllByTestId('tagIcon')).toHaveLength(3);
  // });
});
