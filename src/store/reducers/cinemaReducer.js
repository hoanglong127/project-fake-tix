import actionTypes from "../types";

const initialState = {
  theaterSystemInfo: [],
  theaterSystemShowtime: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_THEATER_SYSTEM_INFO:
      state.theaterSystemInfo = payload;
      return { ...state };
    case actionTypes.SET_THEATER_SYSTEM_SHOWTIME:
      state.theaterSystemShowtime = payload;
      return { ...state };
    default:
      return state;
  }
};

export default reducer;
