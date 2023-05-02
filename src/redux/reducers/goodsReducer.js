import {
  ADD_TO_BAG,
  ADD_TO_WISHLIST,
  SORT_WISHLIST
} from '../actions/goodsActions';

const initialState = {
  orders: {},
  wishlist: {},
  sortedWishlist: []
};

const getSortedWishList = (wishlist, option) => {
  let sortable = Object.values(wishlist);
  switch (option) {
    case 'price-descending':
      return sortable.sort((a, b) => b.products[0].price - a.products[0].price);
    case 'price-ascending':
      return sortable.sort((a, b) => a.products[0].price - b.products[0].price);
    default:
      return sortable;
  }
};

export const goodsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TO_BAG: {
      const currentAmount = state.orders[payload.id]?.amountOrdered ?? 0;
      const order = {
        [payload.id]: {
          ...payload,
          amountOrdered: currentAmount + 1
        }
      };

      return {
        ...state,
        orders: { ...state.orders, ...order }
      };
    }

    case ADD_TO_WISHLIST:
      const isLiked = state.wishlist[payload.id] || false;
      if (isLiked) {
        delete state.wishlist[payload.id];
        return {
          ...state,
          wishlist: state.wishlist
        };
      }
      const newWishList = { ...state.wishlist, [payload.id]: payload };

      return {
        ...state,
        wishlist: newWishList,
        sortedWishlist: getSortedWishList(newWishList)
      };

    case SORT_WISHLIST:
      return {
        ...state,
        sortedWishlist: getSortedWishList(state.wishlist, payload)
      };
    default:
      return state;
  }
};
