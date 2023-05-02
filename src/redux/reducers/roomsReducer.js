import {
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
  SET_IMAGE_FILE,
  SHOW_IMAGE_LOADER,
  HIDE_IMAGE_LOADER,
  GET_ONE_ROOM_IMAGE
} from '../actions/roomsActions';

const initialState = {
  rooms: [],
  oneRoom: [],
  oneRoomImage: null,
  uploadedRoom: [],
  imageCropResult: [],
  loading: false,
  imageLoading: false,
  productsLoading: false,
  imageFile: null
};

export const roomsReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case SHOW_LOADER:
      return {
        ...state,
        loading: true
      };
    case HIDE_LOADER:
      return {
        ...state,
        loading: false
      };
    case SHOW_PRODUCTS_LOADER:
      return {
        ...state,
        productsLoading: true
      };
    case HIDE_PRODUCTS_LOADER:
      return {
        ...state,
        productsLoading: false
      };
    case SHOW_IMAGE_LOADER:
      return {
        ...state,
        imageLoading: true
      };
    case HIDE_IMAGE_LOADER:
      return {
        ...state,
        imageLoading: false
      };
    case GET_ALL_ROOMS:
      return {
        ...state,
        rooms: [...state.rooms, ...payload.rooms]
      };
    case GET_ONE_ROOM: {
      return {
        ...state,
        oneRoom: payload
      };
    }
    case GET_ONE_ROOM_IMAGE: {
      return {
        ...state,
        oneRoomImage: payload
      };
    }
    case GET_SIMILAR_PRODUCTS: {
      return {
        ...state,
        imageCropResult: payload.data.results
      };
    }
    case UPLOAD_IMAGE: {
      return {
        ...state,
        rooms: payload
      };
    }
    case CLEAR_ROOMS: {
      return {
        ...state,
        rooms: []
      };
    }
    case CLEAR_PRODUCTS: {
      return {
        ...state,
        imageCropResult: []
      };
    }
    case SET_IMAGE_FILE: {
      return {
        ...state,
        imageFile: payload
      };
    }
    default:
      return state;
  }
};
