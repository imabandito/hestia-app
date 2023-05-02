/* eslint-disable testing-library/no-render-in-setup */
import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ProductTags } from './ProductTags';
import { productTagsData } from '../../components/ProductTags/ProductTags-data';

describe('productDsItem component', () => {
  beforeEach(() => {
    render(
      <Router>
        <ProductTags data={productTagsData} />
      </Router>
    );
  });

  it('component rendered', () => {
    expect(screen.getByTestId('product-tags')).not.toBeNull();
  });

  it('component rendered proper number of link tags', () => {
    expect(screen.getAllByRole('link')).toHaveLength(4);
  });
});
