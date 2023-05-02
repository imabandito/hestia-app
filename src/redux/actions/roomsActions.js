import axios from 'axios';
import { axiosClient } from '../../api/httpClient';
import { ALL_ROOMS_URL, BASE_URL, ONE_ROOM_URL } from '../../utils/constants';
export const GET_ALL_ROOMS = 'GET_ROOMS';
export const GET_ONE_ROOM = 'GET_ONE_ROOM';
export const UPLOAD_IMAGE = 'UPLOAD_IMAGE';
export const CROP_IMAGE = 'CROP_IMAGE';
export const SHOW_LOADER = 'SHOW_LOADER';
export const HIDE_LOADER = 'HIDE_LOADER';
export const CLEAR_ROOMS = 'CLEAR_ROOMS';
export const CLEAR_PRODUCTS = 'CLEAR_PRODUCTS';
export const GET_SIMILAR_PRODUCTS = 'GET_SIMILAR_PRODUCTS';
export const SHOW_PRODUCTS_LOADER = 'SHOW_PRODUCTS_LOADER';
export const HIDE_PRODUCTS_LOADER = 'HIDE_PRODUCTS_LOADER';
export const SHOW_IMAGE_LOADER = 'SHOW_IMAGE_LOADER';
export const HIDE_IMAGE_LOADER = 'HIDE_IMAGE_LOADER';
export const GET_ONE_ROOM_IMAGE = 'GET_ONE_ROOM_IMAGE';
export const SET_IMAGE_FILE = 'SET_IMAGE_FILE';

const getAllRoomsLocal = (data) => ({
  type: GET_ALL_ROOMS,
  payload: data
});

const getOneRoomLocal = (data) => ({
  type: GET_ONE_ROOM,
  payload: data
});

const postRoomLocal = (data) => ({
  type: UPLOAD_IMAGE,
  payload: data
});

const getSimilarProductsLocal = (data) => ({
  type: GET_SIMILAR_PRODUCTS,
  payload: data
});

const setImageFileLocal = (data) => ({
  type: SET_IMAGE_FILE,
  payload: data
});

const getOneRoomImageLocal = (data) => ({
  type: GET_ONE_ROOM_IMAGE,
  payload: data
});

export const getAllRooms =
  (page = 1, size = 12, classid, confidence) =>
  (dispatch) => {
    dispatch(showLoader());

    try {
      axiosClient({
        method: 'get',
        url: ALL_ROOMS_URL,
        params: {
          page,
          size,
          classid: JSON.stringify(classid),
          confidence: JSON.stringify(confidence)
        }
      }).then((res) => {
        dispatch(hideLoader());
        dispatch(getAllRoomsLocal(res.data));
      });
    } catch (err) {
      throw new Error(err);
    }
  };

export const getOneRoom = (id) => (dispatch) => {
  dispatch(showLoader());
  dispatch(showImageLoader());
  try {
    axiosClient({
      method: 'get',
      url: `${ONE_ROOM_URL}/${id}`
    })
      .then(({ data }) => {
        dispatch(getOneRoomLocal(data));
        dispatch(getOneRoomImage(data.link));
      })
      .catch((err) => {
        dispatch(hideLoader());
        dispatch(hideImageLoader());
        dispatch(getOneRoomLocal(err.message));
      });
  } catch (err) {
    dispatch(hideLoader());
    dispatch(hideImageLoader());
    throw new Error(err);
  }
};

export const getOneRoomImage = (link) => (dispatch) => {
  try {
    fetch(link, {
      method: 'GET',
      headers: {
        origin: '*'
      }
    })
      .then((res) => res.blob())
      .then((blob) => {
        let result = new File([blob], 'img.jpeg', blob);
        dispatch(getOneRoomImageLocal(result));
        dispatch(hideLoader());
        dispatch(hideImageLoader());
      });
  } catch (err) {
    dispatch(hideLoader());
    dispatch(hideImageLoader());
    throw new Error(err);
  }
};

export const postRoom = (file) => (dispatch) => {
  try {
    const formData = new FormData();
    formData.append('file', file);
    dispatch(clearRooms());
    dispatch(showLoader());

    axios
      .post(`${BASE_URL}/similar_rooms_lookup`, formData, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
      })
      .then((res) => {
        dispatch(
          getOneRoomLocal({
            id: 1,
            link: URL.createObjectURL(file),
            similar_ideas: res.data.similar_ideas
          })
        );
        dispatch(hideLoader());
      });
  } catch (err) {
    throw new Error(err);
  }
};

export const getSimilarProducts = (file) => (dispatch) => {
  dispatch(showProductsLoader());
  try {
    axios
      .post(`${BASE_URL}/products_lookup`, file, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
      })
      .then((res) => {
        dispatch(hideProductsLoader());
        dispatch(getSimilarProductsLocal(res));
      })
      .catch((err) => {
        dispatch(hideProductsLoader());
        throw new Error(err);
      });
  } catch (err) {
    throw new Error(err);
  }
};

export const getRoomsById = (similarArray) => (dispatch) => {
  try {
    const requests = similarArray.map(({ id }) =>
      axios.get(`${BASE_URL}/${ONE_ROOM_URL}/${id}`)
    );

    axios
      .all(requests)
      .then((responses) => responses.map((res) => res.data))
      .then((data) => {
        dispatch(postRoomLocal(data));
        dispatch(hideLoader());
      });
  } catch (err) {
    dispatch(hideLoader());
    throw new Error(err);
  }
};

export const clearRooms = () => (dispatch) => {
  return dispatch({ type: CLEAR_ROOMS });
};

export const clearProducts = () => (dispatch) => {
  return dispatch({ type: CLEAR_PRODUCTS });
};

export const showLoader = () => (dispatch) => {
  dispatch({
    type: SHOW_LOADER
  });
};

export const hideLoader = () => (dispatch) => {
  dispatch({
    type: HIDE_LOADER
  });
};
export const showImageLoader = () => (dispatch) => {
  dispatch({
    type: SHOW_IMAGE_LOADER
  });
};

export const hideImageLoader = () => (dispatch) => {
  dispatch({
    type: HIDE_IMAGE_LOADER
  });
};

export const showProductsLoader = () => (dispatch) => {
  dispatch({
    type: SHOW_PRODUCTS_LOADER
  });
};

export const hideProductsLoader = () => (dispatch) => {
  dispatch({
    type: HIDE_PRODUCTS_LOADER
  });
};

export const setImageFile = (file) => setImageFileLocal(file);
