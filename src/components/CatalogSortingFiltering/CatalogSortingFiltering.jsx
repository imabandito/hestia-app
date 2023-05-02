import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { catalogItems } from '../CatalogSearchItems/CatalogSearchItemsData';
import { CatalogFilter } from '..';
import {
  filterByOptions,
  updateFilter,
  updateSort,
} from '../../redux/actions/catalogSortingActions';
import { Trans } from 'react-i18next';

export function CatalogSortingFiltering({
  selectData,
  onSortChange,
  showFilter = true,
}) {
  const [isFilterOpen, setFilterOpen] = useState(false);
  const [option, setOption] = useState(
    selectData.defaultValue ?? selectData.options[0]
  );
  const dispatch = useDispatch();
  const { sortingOption, filterOptions } = useSelector(
    ({ catalogSortingReducer }) => catalogSortingReducer
  );
  const url = new URL(window.location);

  function handleChange(e) {
    dispatch(updateSort(e.target.value));
  }

  const handleFilter = () => {
    setFilterOpen(!isFilterOpen);
  };
  useEffect(() => {
    const urlOptions = {};
    Object.keys(filterOptions).forEach((option) => {
      const urlValue = url.searchParams.get(option);
      if (urlValue) {
        urlOptions[option] = urlValue;
      }
    });
    const sortOption = url.searchParams.get('sort');
    if (sortOption) {
      dispatch(updateSort(sortOption));
    }
    dispatch(updateFilter(urlOptions));
    window.history.pushState({}, '', url);
  }, []);

  useEffect(() => {
    dispatch(filterByOptions(catalogItems));
  }, [filterOptions]);

  useEffect(() => {
    dispatch(onSortChange(catalogItems, sortingOption));
  }, [sortingOption]);

  return (
    <div className='catalog__search-box'>
      <div className='catalog__search-box__options'>
        {showFilter && (
          <button
            className='catalog__filter-btn button button_black button_medium'
            onClick={handleFilter}
          >
            <Trans>Filters</Trans>
          </button>
        )}

        <div className='catalog__select-box'>
          <select
            className={selectData.className ?? 'catalog-select'}
            id='standard-select'
            value={sortingOption}
            onChange={handleChange}
            data-testid='items-selection'
          >
            {selectData.options.map((option, i) => (
              <option data-testid={option} value={option} key={i}>
                <Trans>{option}</Trans>
              </option>
            ))}
          </select>
        </div>
      </div>
      <CatalogFilter
        extraClass='catalog__search-box__filter'
        isOpen={isFilterOpen}
      />
    </div>
  );
}
