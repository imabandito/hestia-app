import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addSecondOption,
  changeOption,
  changeRange,
  clearSecondOption,
  setUnsetFilter,
} from '../../redux/actions/getIdeasFilteringActions';
import { SELECT_OPTIONS } from '../../utils/constants';

export function FilteringFieldset({ setActive }) {
  const [addDelete, setAddDelete] = useState(false);
  const dispatch = useDispatch();
  const { options, ranges, isFilterActive } = useSelector(
    ({ getIdeasFilteringReducer }) => getIdeasFilteringReducer
  );

  function handleClickClear() {
    if (isFilterActive) {
      dispatch(setUnsetFilter(false));
    }
  }

  function handleClickApply() {
    if (!isFilterActive) {
      dispatch(setUnsetFilter(true));
      setActive(true);
    }
  }

  function handleAddDelete() {
    if (addDelete) {
      dispatch(clearSecondOption());
    } else {
      dispatch(addSecondOption());
    }

    setAddDelete((prev) => {
      return !prev;
    });
  }

  function handleOptionChange(e) {
    if (e.target.id === 'select-1') {
      dispatch(changeOption(0, +e.target.value));
    } else {
      dispatch(changeOption(1, +e.target.value));
    }
  }

  function handleRangeOnChange(e) {
    if (addDelete) {
      if (e.target.id === 'option-range-1') {
        dispatch(changeRange(0, +e.target.value));
        dispatch(changeRange(1, 99 - (+e.target.value - 1)));
      } else if (e.target.id === 'option-range-2') {
        dispatch(changeRange(1, +e.target.value));
        dispatch(changeRange(0, 99 - (+e.target.value - 1)));
      }
    } else {
      if (e.target.id === 'option-range-1') {
        dispatch(changeRange(0, +e.target.value));
      } else if (e.target.id === 'option-range-2') {
        dispatch(changeRange(1, +e.target.value));
      }
    }
  }

  return (
    <div className='filtering-dropdown__inputs-box'>
      <div>
        <fieldset className='filtering-dropdown__fieldset'>
          <select
            className='filtering-dropdown__select'
            value={options[0]}
            onChange={handleOptionChange}
            id='select-1'
          >
            {SELECT_OPTIONS.filter((option) => {
              return options[1] !== option[0];
            }).map((option) => {
              return (
                <option key={option[0]} value={option[0]}>
                  {option[1]}
                </option>
              );
            })}
          </select>
          {addDelete && (
            <input
              disabled={options.length === 1}
              value={ranges[0]}
              id='option-range-1'
              onChange={handleRangeOnChange}
              className='filtering-dropdown__range'
              type='range'
            />
          )}
        </fieldset>
        {!addDelete && (
          <button
            className='button button_white button_option-add'
            onClick={handleAddDelete}
          >
            Add Option
          </button>
        )}
      </div>

      {addDelete && (
        <div>
          <fieldset className='filtering-dropdown__fieldset'>
            <select
              className='filtering-dropdown__select'
              value={options[1]}
              onChange={handleOptionChange}
              id='select-2'
            >
              {SELECT_OPTIONS.filter((option) => {
                return options[0] !== option[0];
              }).map((option) => {
                return (
                  <option key={option[0]} value={option[0]}>
                    {option[1]}
                  </option>
                );
              })}
            </select>
            <input
              value={ranges[1]}
              id='option-range-2'
              onChange={handleRangeOnChange}
              className='filtering-dropdown__range'
              type='range'
            />

            {addDelete && (
              <button
                className='button button_white button_option-delete'
                onClick={handleAddDelete}
              >
                Delete Option
              </button>
            )}
          </fieldset>
        </div>
      )}
      <div className='filtering-dropdown__buttons'>
        {isFilterActive ? (
          <button
            onClick={handleClickClear}
            className='button button_white button__option-clear'
          >
            Clear
          </button>
        ) : (
          <button
            onClick={handleClickApply}
            className='button button_white button__option-clear'
          >
            Apply
          </button>
        )}
      </div>
    </div>
  );
}
