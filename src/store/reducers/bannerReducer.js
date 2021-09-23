import actionTypes from "../types";

const initialState = {
  bannerList: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_BANNER_LIST:
      state.bannerList = payload;
      return { ...state };
    default:
      return state;
  }
};

export default reducer;
