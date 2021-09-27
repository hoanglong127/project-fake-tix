import actionTypes from "../types";

const initialState = {
  userInfo: null,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_USER_INFO:
      state.userInfo = payload;
      return { ...state };
    default:
      return state;
  }
};

export default reducer;
