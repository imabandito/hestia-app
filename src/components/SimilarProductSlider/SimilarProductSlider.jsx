import { Swiper, SwiperSlide } from 'swiper/react';
import cn from 'classnames';
import { Navigation } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import { Loader } from '..';

export function SimilarProductSlider({ similarProduct, loading, extraClass }) {
  let swiperClassnames = cn(
    'similar-product-slider',
    {
      'similar-product-slider--active': !loading
    },
    extraClass
  );

  return (
    <>
      <Swiper
        className={swiperClassnames}
        modules={[Navigation]}
        navigation
        slidesPerView={'auto'}
        spaceBetween={13}
        data-testid='swiper-library'
      >
        {!loading &&
          similarProduct?.map((slide, index) => (
            <SwiperSlide
              className='similar-products-slide'
              key={index}
              data-testid='swiperSlide'
            >
              <div className='similar-product'>
                <img
                  className='similar-product__image'
                  src={slide}
                  alt={slide.alt}
                />
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
      {loading && (
        <div className='products-loader-box products-loader-box_full'>
          <Loader />
        </div>
      )}
    </>
  );
}
