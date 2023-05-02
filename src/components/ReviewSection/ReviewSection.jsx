import { useState, useEffect, useRef } from 'react';
import { Trans } from 'react-i18next';
import { Comment } from '../index';

export function ReviewSection({ commentData, commentsPerPage }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const [touchPosition, setTouchPosition] = useState(null);

  const timeout = useRef(null);

  useEffect(() => {
    clearTimeout(timeout.current);
    timeout.current = setTimeout(() => {
      setActiveIndex(activeIndexChange);
    }, 5000);

    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex]);

  const maxItemsPerPage = 3;
  let itemsPerPage = commentsPerPage <= maxItemsPerPage ? commentsPerPage : 1;

  const numberOfPages = Math.ceil(commentData.length / itemsPerPage);

  const activeIndexChange =
    activeIndex === numberOfPages - 1 ? 0 : activeIndex + 1;

  const commentContainers = commentData.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / itemsPerPage);

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [];
    }

    resultArray[chunkIndex].push(item);

    return resultArray;
  }, []);

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
      setActiveIndex(activeIndexChange);
    }

    if (diff < -minimalLengthToSwipe) {
      setActiveIndex(activeIndex === 0 ? numberOfPages - 1 : activeIndex - 1);
    }

    setTouchPosition(null);
  };

  return (
    <div
      className='background-fill_greyLight'
      onMouseEnter={() => clearTimeout(timeout.current)}
      onMouseLeave={() => setActiveIndex(activeIndexChange)}
    >
      <div className='review-section wrapper' data-testid='review-section'>
        <h3 className='review-section__header'>
          <Trans>Reviews</Trans>
        </h3>
        <div
          className='review-section__comments-container'
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {commentContainers.map((container, index) => (
            <div
              className='slide-container'
              key={index}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
            >
              {container.map((comment) => (
                <Comment key={comment.id} comment={comment} />
              ))}
            </div>
          ))}
        </div>
        {numberOfPages > 1 && (
          <div className='review-section__all-dots' data-testid='all-dots'>
            {commentContainers.map((_, index) => (
              <span
                key={index}
                className={
                  activeIndex === index
                    ? 'review-section-dot  review-section-dot_active'
                    : 'review-section-dot'
                }
                onClick={() => setActiveIndex(index)}
                data-testid={`dot-${index}`}
              ></span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
