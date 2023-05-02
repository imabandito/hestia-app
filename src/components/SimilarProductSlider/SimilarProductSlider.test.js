/* eslint-disable testing-library/no-render-in-setup */
import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import { SimilarProductSlider } from './SimilarProductSlider';
import { similarProduct } from './SimilarProductData';

describe('similarProductSlider component', () => {
  beforeEach(() => {
    render(<SimilarProductSlider similarProduct={similarProduct} />);
  });

  it('component rendered', () => {
    expect(screen.getByTestId('swiper-library')).not.toBeNull();
  });

  it('proper amout of items rendered', () => {
    expect(screen.getAllByTestId('swiperSlide')).toHaveLength(29);
  });
});
