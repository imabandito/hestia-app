import { useEffect, useState } from 'react';
import cn from 'classnames';
import { Star } from '../UI/ Star/Star';

export const StarRating = ({
  rate,
  extraClass,
  size = 12,
  onRatingChange = () => {},
  ...rest
}) => {
  const [isTablet, setIsTablet] = useState(false);
  const starRatingClassesON = cn('rating-default on', {
    'rating-default_disabled': rate
  });
  const starRatingClassesOFF = cn('rating-default off', {
    'rating-default_disabled': rate
  });

  useEffect(() => {
    window.screen.width > 768 ? setIsTablet(true) : setIsTablet(false);
  }, []);

  const [rating, setRating] = useState(rate || 0);
  const [hover, setHover] = useState(0);
  return (
    <div className={`star-rating ${extraClass ? extraClass : ''}`}>
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type='button'
            key={index}
            data-testid={`rateStar-${index}`}
            className={
              index <= (hover || rating)
                ? starRatingClassesON
                : starRatingClassesOFF
            }
            {...rest}
            onClick={() => {
              setRating(index);
              onRatingChange(index);
            }}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span>
              <Star size={size} />
            </span>
          </button>
        );
      })}
    </div>
  );
};
