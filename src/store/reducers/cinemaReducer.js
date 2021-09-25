import actionTypes from "../types";

const initialState = {
  theaterSystemInfo: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_THEATER_SYSTEM_INFO:
      state.theaterSystemInfo = payload;
      return { ...state };
    default:
      return state;
  }
};

export default reducer;
