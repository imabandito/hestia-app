import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Mousewheel } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import { RecentlyViewedItem } from '../RecentlyViewedItem/RecentlyViewedItem';

export function RecentlyViewedSlider({ data }) {
  return (
    <Swiper
      className='recentlyViewedSlider'
      modules={[FreeMode, Mousewheel]}
      freeMode={true}
      slidesPerView={'auto'}
      spaceBetween={13}
      mousewheel={true}
      data-testid='recently-viewed-swiper'
    >
      {data?.map((item) => (
        <SwiperSlide className='recentlyViewedSlide' key={item.id}>
          <RecentlyViewedItem
            key={item.id}
            itemData={item}
            path='/catalog/product'
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
