export const CHANGE_OPTION = 'CHANGE_OPTION';
export const FILTER = 'FILTER';
export const UPDATE_FILTER = 'UPDATE_FILTER';
export const UPDATE_SORT = 'UPDATE_SORT';

export const sortBySearchingOption = () => ({
  type: CHANGE_OPTION,
});

export const filterByOptions = (data) => ({
  type: FILTER,
  payload: data,
});

export const updateFilter = (filter) => ({
  type: UPDATE_FILTER,
  payload: filter,
});

export const updateSort = (sort) => ({
  type: UPDATE_SORT,
  payload: sort,
});
