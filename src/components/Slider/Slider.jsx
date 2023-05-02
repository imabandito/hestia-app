import { Dots } from './Dots';
import { useEffect, useState } from 'react';
import cn from 'classnames';
import { Tag } from '../Tag/Tag';
import { Trans } from 'react-i18next';

export function Slider({ slides, dotType, slideExtraClass, isAuto }) {
  const len = slides.length - 1;

  const [activeIndex, setActiveIndex] = useState(0);
  const [touchPosition, setTouchPosition] = useState(null);

  const sliderClasses = cn('slider-container', slideExtraClass);
  useEffect(() => {
    setActiveIndex(0);
  }, [slides]);

  useEffect(() => {
    if (isAuto) {
      const timeout = setTimeout(() => {
        setActiveIndex(activeIndex === len || len <= 0 ? 0 : activeIndex + 1);
      }, 5000);

      return () => clearTimeout(timeout);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex, slides]);

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e) => {
    const touchDown = touchPosition;
    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;
    const minimalLengthToSwipe = 5;

    if (diff > minimalLengthToSwipe) {
      setActiveIndex(activeIndex === slides.length - 1 ? 0 : activeIndex + 1);
    }

    if (diff < -minimalLengthToSwipe) {
      setActiveIndex(activeIndex === 0 ? slides.length - 1 : activeIndex - 1);
    }

    setTouchPosition(null);
  };

  return (
    <div className={sliderClasses}>
      <div
        className='all-slides'
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className='slides'
            data-testid={`slide-${index}`}
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {slide.label && <Tag type={slide.label} extraClass='tag-pdp' />}
            <img className='slide-image' src={slide.src} alt={slide.alt} />
            {slide.text ? (
              <p className='slider-text'>
                <Trans>{slide.text}</Trans>
              </p>
            ) : (
              ''
            )}
          </div>
        ))}
      </div>{' '}
      {slides.length > 1 && (
        <Dots
          activeIndex={activeIndex}
          sliderImage={slides}
          onclick={(activeIndex) => setActiveIndex(activeIndex)}
          dotType={dotType}
        />
      )}
    </div>
  );
}
