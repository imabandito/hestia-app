import { LOGIN_USER, LOG_OUT } from '../actions/loginActions';

const initialState = {
  user: null
};

export const loginReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_USER: {
      return {
        user: payload
      };
    }
    case LOG_OUT: {
      return {
        ...initialState
      };
    }
    default:
      return state;
  }
};
