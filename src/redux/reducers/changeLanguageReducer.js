import { CHANGE_LANGUAGE } from '../actions/changeLanguage';
const initialState = {
  language: 'EN',
};

export function changeLanguageReducer(state = initialState, { type, payload }) {
  switch (type) {
    case CHANGE_LANGUAGE: {
      return {
        ...state,
        language: payload,
      };
    }
    default:
      return state;
  }
}
