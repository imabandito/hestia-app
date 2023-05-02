export { goodsReducer } from './goodsReducer';
export { roomsReducer } from './roomsReducer';
export { catalogSortingReducer } from './catalogSortingReducer';
export { getIdeasFilteringReducer } from './getIdeasFilteringReducer';
export { loginReducer } from './loginReducer';

export {
  GET_ALL_ROOMS,
  GET_ONE_ROOM,
  UPLOAD_IMAGE,
  CLEAR_ROOMS,
  CLEAR_PRODUCTS,
  HIDE_LOADER,
  SHOW_LOADER,
  GET_SIMILAR_PRODUCTS,
  SHOW_PRODUCTS_LOADER,
  HIDE_PRODUCTS_LOADER,
  SHOW_IMAGE_LOADER,
  HIDE_IMAGE_LOADER,
  GET_ONE_ROOM_IMAGE,
  getAllRooms,
  getOneRoom,
  postRoom,
  getRoomsById,
  clearRooms,
  clearProducts,
  showLoader,
  hideLoader,
  showProductsLoader,
  hideProductsLoader,
} from '../actions/roomsActions';

export { CHANGE_OPTION } from '../actions/catalogSortingActions';
