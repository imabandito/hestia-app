import { SELECT_OPTIONS } from '../../utils/constants';
import {
  ADD_SECOND_OPTION,
  CHANGE_FILTERING_OPTION,
  CHANGE_RANGE,
  CLEAR_SECOND_OPTION,
  SET_UNSET_FILTER,
} from '../actions/getIdeasFilteringActions';

const initialState = {
  options: [0],
  ranges: [100],
  isFilterActive: false,
};

export const getIdeasFilteringReducer = (
  state = initialState,
  { payload, type }
) => {
  switch (type) {
    case CHANGE_RANGE: {
      const newRangesArr = [...state.ranges];
      newRangesArr[payload.rangeNum] = payload.rangeValue;
      return {
        ...state,
        ranges: newRangesArr,
      };
    }
    case CHANGE_FILTERING_OPTION: {
      const newOptionsArr = [...state.options];
      newOptionsArr[payload.optionIndex] = payload.optionNum;
      return {
        ...state,
        options: newOptionsArr,
      };
    }
    case CLEAR_SECOND_OPTION: {
      const newOptionsArr = [...state.options];
      const newRangesArr = [...state.ranges];
      newOptionsArr.pop();
      newRangesArr.pop();
      newRangesArr[0] = 100;
      return {
        ...state,
        options: newOptionsArr,
        ranges: newRangesArr,
      };
    }
    case ADD_SECOND_OPTION: {
      const newOptionsArr = [...state.options];
      const newRangesArr = [...state.ranges];
      let filteredOptions = SELECT_OPTIONS.filter((option) => {
        return state.options[0] !== option[0];
      });
      newOptionsArr.push(filteredOptions[0][0]);
      newRangesArr.push(0);
      return {
        ...state,
        options: newOptionsArr,
        ranges: newRangesArr,
      };
    }
    case SET_UNSET_FILTER: {
      return {
        ...state,
        isFilterActive: payload,
      };
    }
    default:
      return state;
  }
};
