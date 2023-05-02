import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CatalogItem, Pagination } from '..';
import { CATALOG_ITEMS_PER_PAGE } from '../../utils/constants';

export function CatalogSearchItems() {
  const { sortedItems, sortingOption, filterOptions } = useSelector(
    ({ catalogSortingReducer }) => catalogSortingReducer
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [pageItems, setPageItems] = useState([]);

  const url = new URL(window.location);
  useEffect(() => {
    setPageItems(
      sortedItems.slice(
        (currentPage - 1) * CATALOG_ITEMS_PER_PAGE,
        currentPage * CATALOG_ITEMS_PER_PAGE
      )
    );
  }, [currentPage, sortingOption, sortedItems]);

  useEffect(() => {
    url.searchParams.set('sort', sortingOption);
    Object.keys(filterOptions).forEach((option) => {
      const value = filterOptions[option];
      if (value) {
        url.searchParams.set(option, filterOptions[option]);
      }
    });
    window.history.pushState({}, '', url);
  }, [filterOptions, sortingOption]);

  return (
    <div data-testid='search-items' className='catalog__search-items'>
      {pageItems.map((obj) => (
        <CatalogItem key={obj.id} item={obj} />
      ))}
      {sortedItems.length > CATALOG_ITEMS_PER_PAGE && (
        <Pagination
          pages={Math.ceil(sortedItems.length / CATALOG_ITEMS_PER_PAGE)}
          setCurrentPage={setCurrentPage}
        />
      )}
    </div>
  );
}
