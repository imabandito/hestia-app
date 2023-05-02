import cn from 'classnames';
import { useEffect } from 'react';
import { useState } from 'react';
import { Tag, StarRating, Button, ReplyForm } from '../../components/index';

export function Review({ reviewer, addReply }) {
  const [showAnswers, setShowAnswers] = useState(false);
  const [isReply, setIsReply] = useState(false);

  const handleAnswers = () => {
    setShowAnswers(!showAnswers);
  };
  const answerButtonClasses = cn(showAnswers ? 'answer-rotate' : 'answer');

  const handleReply = () => {
    setIsReply(!isReply);
  };

  const handleCloseReply = () => {
    setIsReply(false);
  };

  const handleSubmitReply = (reply) => {
    addReply({ ...reply, id: reviewer.id });
    setIsReply(false);
  };

  useEffect(() => {
    if (window.screen.width >= 768) {
      setShowAnswers(true);
    }
  }, []);

  const reviewClasses = cn(
    reviewer.onAnswer ? 'review__on-answer' : 'review',
    reviewer.label === 'answer' ? 'review-answer' : ''
  );

  return (
    <div
      id='review-section'
      className='review-container wrapper'
      data-testid='review-item'
    >
      <div className={reviewClasses}>
        <div className='review__content review-user'>
          <img
            className='review-user__image'
            src={reviewer.icon}
            alt={reviewer.alt}
          />
          <div className='review-user-info'>
            <div className='review-user-info__header'>
              <div className='user-info-name-container'>
                {reviewer.name && <p>{reviewer.name}</p>}
                <Tag type={reviewer.label} />
              </div>
              {reviewer.label === 'review' && (
                <StarRating size={20} rate={reviewer.rate} disabled />
              )}
            </div>
            {reviewer.text && (
              <p className='review-user-info__message'>{reviewer.text}</p>
            )}
            {reviewer.date && (
              <div className='review-user-info__date'>
                <p className='reviewer-date'>{reviewer.date}</p>
                {reviewer.label !== 'answer' && (
                  <Button
                    text='Reply'
                    type='greenTransparent'
                    extraClass='review'
                    onClick={handleReply}
                  />
                )}
              </div>
            )}
          </div>
        </div>
        {isReply && (
          <div className='review-form__wrapper'>
            <ReplyForm
              extraClass='review__form'
              closeReply={handleCloseReply}
              submitReply={handleSubmitReply}
              data-testid='reply-form'
            />
          </div>
        )}

        {reviewer.answers && reviewer.answers.length > 0 && (
          <div className='review__reply'>
            <Button
              text={reviewer.answers && `${reviewer.answers?.length} answers`}
              type='greenTransparentLight'
              icon='bentArrow'
              extraClass={answerButtonClasses}
              onClick={handleAnswers}
              data-testid='answers-button'
            />
            {showAnswers &&
              reviewer.answers.map((answer) => (
                <Review reviewer={answer} key={answer.id} addReply={addReply} />
              ))}
          </div>
        )}
      </div>
    </div>
  );
}
