import actionTypes from "../types";

const initialState = false;

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.DISPLAY_LOADING:
      return (state = true);
    case actionTypes.HIDE_LOADING:
      return (state = false);
    default:
      return state;
  }
};

export default reducer;
