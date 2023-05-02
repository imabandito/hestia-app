export const CHANGE_RANGE = 'CHANGE_RANGE';
export const CHANGE_FILTERING_OPTION = 'CHANGE_FILTERING_OPTION';
export const CLEAR_SECOND_OPTION = 'CLEAR_SECOND_OPTION';
export const ADD_SECOND_OPTION = 'ADD_SECOND_OPTION';
export const SET_UNSET_FILTER = 'SET_UNSET_FILTER';

export function changeRange(rangeNum, rangeValue) {
  return {
    type: CHANGE_RANGE,
    payload: { rangeNum, rangeValue },
  };
}

export function changeOption(optionIndex, optionNum) {
  return {
    type: CHANGE_FILTERING_OPTION,
    payload: { optionIndex, optionNum },
  };
}
export function clearSecondOption() {
  return {
    type: CLEAR_SECOND_OPTION,
  };
}

export function addSecondOption() {
  return {
    type: ADD_SECOND_OPTION,
  };
}

export const setUnsetFilter = (data) => (dispatch) => {
  dispatch({
    type: SET_UNSET_FILTER,
    payload: data,
  });
};
