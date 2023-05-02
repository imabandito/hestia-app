import {
  CHANGE_OPTION,
  FILTER,
  UPDATE_FILTER,
  UPDATE_SORT,
} from '../actions/catalogSortingActions';

const initialState = {
  sortingOption: 'popularity',
  sortedItems: [],
  filterOptions: {
    minPrice: '0',
    maxPrice: '100000',
    color: 'any',
    rate: 1,
  },
};

function getSortedItems(data, option) {
  switch (option) {
    case 'popularity': {
      return data.sort((a, b) => b.rate - a.rate);
    }
    case 'price-descending': {
      return data.sort((a, b) => b.price - b.discount - (a.price - a.discount));
    }
    case 'price-ascending': {
      return data.sort((a, b) => a.price - a.discount - (b.price - b.discount));
    }
    case 'a-z': {
      return data.sort((a, b) => a.title.localeCompare(b.title));
    }
    case 'z-a': {
      return data.sort((a, b) => b.title.localeCompare(a.title));
    }
    default:
      return data;
  }
}

function filterItems(data, options) {
  return data.filter((item) => {
    return (
      item.price >= options.minPrice &&
      item.price <= options.maxPrice &&
      item.rate >= options.rate &&
      (options.discount ? item.discount : true) &&
      (options.color !== 'any'
        ? item.products?.find(
            ({ color }) => color.toUpperCase() === options.color.toUpperCase()
          )
        : true)
    );
  });
}

export const catalogSortingReducer = (
  state = initialState,
  { payload, type }
) => {
  switch (type) {
    case CHANGE_OPTION:
      return {
        ...state,
        sortedItems: getSortedItems(state.sortedItems, state.sortingOption),
      };
    case FILTER:
      return {
        ...state,
        sortedItems: filterItems(payload, state.filterOptions),
      };
    case UPDATE_FILTER:
      return {
        ...state,
        filterOptions: {
          ...state.filterOptions,
          ...payload,
        },
      };
    case UPDATE_SORT:
      return {
        ...state,
        sortingOption: payload,
      };

    default:
      return state;
  }
};
