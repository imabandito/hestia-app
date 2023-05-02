export const ADD_TO_BAG = 'ADD_TO_BAG';
export const ADD_TO_WISHLIST = 'ADD_TO_WISHLIST';
export const SORT_WISHLIST = 'SORT_WISHLIST';

export const addToBag = (item) => ({ type: ADD_TO_BAG, payload: item });

export const addToWishList = (item) => ({
  type: ADD_TO_WISHLIST,
  payload: item
});

export const sortWishList = (_, option) => ({
  type: SORT_WISHLIST,
  payload: option
});
