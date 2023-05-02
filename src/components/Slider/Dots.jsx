import cn from 'classnames';

export function Dots({ activeIndex, onclick, sliderImage, dotType }) {
  const dotActiveClassNames = cn(
    'dot active-dot',
    dotType && `dot--${dotType} active-dot--${dotType}`
  );
  const dotClassNames = cn('dot', dotType && `dot--${dotType} `);

  return (
    <div className='all-dots' data-testid='allDots'>
      {sliderImage.map((slide, index) => (
        <span
          key={index}
          className={`${
            activeIndex === index ? dotActiveClassNames : dotClassNames
          }`}
          onClick={(e) => {
            e.preventDefault();
            onclick(index);
          }}
          data-testid={`dot-${index}`}
        ></span>
      ))}
    </div>
  );
}
