import { useEffect } from 'react';
import { useState } from 'react';
import { Trans } from 'react-i18next';
import { Review, Pagination, Button } from '../index';

export function Reviews({ reviews, setOpenModal }) {
  const [allReviews, setAllReviews] = useState(reviews);
  const [pageReviews, setPageReviews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 2;

  useEffect(() => {
    setAllReviews(reviews);
  }, [reviews]);

  useEffect(() => {
    setPageReviews(
      allReviews.slice(
        (currentPage - 1) * reviewsPerPage,
        currentPage * reviewsPerPage
      )
    );
  }, [currentPage, allReviews]);

  const addReply = ({ name, text, id }) => {
    const replyToAdd = {
      id: Date.now(),
      icon: reviews[0].icon,
      alt: reviews[0].alt,
      name: name,
      tag: 'Review',
      rate: 0,
      text: text,
      date: new Date().toLocaleDateString().replace(/\//g, '.'),
      label: 'answer',
    };

    setAllReviews((reviews) => {
      reviews.find((item) => item.id === id)?.answers?.push(replyToAdd);
      return reviews;
    });
  };

  return (
    <div
      className='background-fill background-fill_green-super-light'
      data-testid='questions-reviews'
    >
      <div className='wrapper product-reviews'>
        <div className='product-reviews__info'>
          <h4>
            <Trans>Questions and reviews</Trans>
          </h4>
          <p>
            {reviews.length} <Trans>reviews</Trans>
          </p>
        </div>
        <div>
          {pageReviews?.map((review) => (
            <Review reviewer={review} addReply={addReply} key={review.id} />
          ))}
          {allReviews.length > reviewsPerPage && (
            <Pagination
              pages={Math.ceil(allReviews.length / reviewsPerPage)}
              setCurrentPage={setCurrentPage}
              extraClass='reviews__pagination'
            />
          )}
        </div>

        <div className='product-reviews__buttons'>
          <Button
            text='Leave feedback'
            extraClass='product-review'
            onClick={() => setOpenModal({ type: 'review', open: true })}
          />
          <Button
            text='Ask question'
            type='greenTransparent'
            extraClass='product-review'
            onClick={() => setOpenModal({ type: 'question', open: true })}
          />
        </div>
      </div>
    </div>
  );
}
