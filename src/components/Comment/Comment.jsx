import cn from 'classnames';
import { StarRating } from '../StarRating/StarRating';
import { Button } from '../UI/Buttons/Button';
import { PinkLine } from '../UI/PinkLine/PinkLine';
import { useState, useRef } from 'react';

export function Comment({ comment, ...rest }) {
  const [isActive, setActive] = useState(false);

  const commentRef = useRef();
  const minCharForExtendingComment = 300;

  function handleBackClick() {
    commentRef.current.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const openComment = () => {
    if (isActive) {
      handleBackClick();
      return setActive(false);
    }
    setActive(true);
  };

  const messageClass = cn('comment__message', {
    'comment__message--opened': isActive
  });

  return (
    <div className='comment'>
      <StarRating extraClass='comment__rating' rate={comment.rate} disabled />
      <p className='comment__product'>{comment.product}</p>
      <div ref={commentRef} className={messageClass}>
        <p className='message-text'>{comment.message}</p>
      </div>
      <div className='comment__user'>
        <div className='comment-user-info'>
          <p className='comment-user-info__text'>{comment.author}</p>
          <PinkLine />
          <p className='comment-user-info__text'>{comment.date}</p>
        </div>
        {comment.message.length >= minCharForExtendingComment && (
          <Button
            text='More'
            type='maroon'
            icon='arrow'
            position='right'
            state={isActive}
            clickHandler={openComment}
            rotate='rotateBack90'
          />
        )}
      </div>
    </div>
  );
}
