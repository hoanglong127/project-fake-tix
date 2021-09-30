import User from "../../models/user";
import actionTypes from "../types";

const initialState = {
  userInfo: new User(),
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
