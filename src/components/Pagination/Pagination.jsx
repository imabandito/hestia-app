import React, { useState, useEffect } from 'react';
import cn from 'classnames';
import { ArrowLeft, ArrowRight } from '../UI/indexIcon';

export function Pagination({ pages, setCurrentPage, extraClass }) {
  const numberOfPages = [];
  for (let i = 1; i <= pages; i++) {
    numberOfPages.push(i);
  }
  const [currentButton, setCurrentButton] = useState(1);
  const [arrOfCurrButtons, setArrOfCurrButtons] = useState([]);

  const dots = '...';
  useEffect(() => {
    let tempNumberOfPages = [...arrOfCurrButtons];

    if (numberOfPages.length < 6) {
      tempNumberOfPages = numberOfPages;
    } else if (currentButton >= 1 && currentButton <= 3) {
      tempNumberOfPages = [1, 2, 3, 4, dots, numberOfPages.length];
    } else if (currentButton === 4) {
      const sliced = numberOfPages.slice(0, 5);
      tempNumberOfPages = [...sliced, dots, numberOfPages.length];
    } else if (currentButton > 4 && currentButton < numberOfPages.length - 2) {
      const sliced1 = numberOfPages.slice(currentButton - 2, currentButton);
      const sliced2 = numberOfPages.slice(currentButton, currentButton + 1);
      tempNumberOfPages = [
        1,
        dots,
        ...sliced1,
        ...sliced2,
        dots,
        numberOfPages.length
      ];
    } else if (currentButton > numberOfPages.length - 3) {
      const sliced = numberOfPages.slice(numberOfPages.length - 4);
      tempNumberOfPages = [1, dots, ...sliced];
    }

    setArrOfCurrButtons(tempNumberOfPages);
    setCurrentPage(currentButton);
  }, [currentButton, pages]);

  const paginationClassnames = cn('pagination-container', extraClass);

  return (
    <div className={paginationClassnames} data-testid='pagination'>
      <button
        className={`${currentButton === 1 ? 'disabled' : ''}`}
        onClick={() =>
          setCurrentButton((prev) => (prev <= 1 ? prev : prev - 1))
        }
      >
        <ArrowLeft />
      </button>
      <div className='pagination-container__pages'>
        {arrOfCurrButtons.map((item, index) => {
          return (
            <button
              key={index}
              className={`${
                currentButton === item
                  ? 'active'
                  : item === '...'
                  ? 'pagination-dots'
                  : ''
              }`}
              onClick={() => item !== dots && setCurrentButton(item)}
              data-testid='pagination-page'
            >
              {item}
            </button>
          );
        })}
      </div>
      <button
        data-testid='pagination-forward'
        className={`${
          currentButton === numberOfPages.length ? 'disabled' : ''
        }`}
        onClick={() => {
          setCurrentButton((prev) =>
            prev >= numberOfPages.length ? prev : prev + 1
          );
        }}
      >
        <ArrowRight />
      </button>
    </div>
  );
}
