import createAction from ".";
import { request } from "../../api/request";
import { DOMAIN } from "../../utils/settings";
import actionTypes from "../types";

export const signIn = (user, pageRedirects, alertError) => {
  return async (dispatch) => {
    try {
      const res = await request({
        method: "POST",
        url: `${DOMAIN}/api/QuanLyNguoiDung/DangNhap`,
        data: user,
      });

      dispatch(createAction(actionTypes.SET_USER_INFO, res.data.content));
      localStorage.setItem("t", res.data.content.accessToken);
      pageRedirects();
    } catch (err) {
      alertError(err.response.data.content);
    }
  };
};

export const logOut = (alertSuccess) => {
  return (dispatch) => {
    dispatch(createAction(actionTypes.SET_USER_INFO, null));
    localStorage.removeItem("t");
    alertSuccess();
  };
};

export const fetchUserInfo = async (dispatch) => {
  try {
    const res = await request({
      method: "POST",
      url: `${DOMAIN}/api/QuanLyNguoiDung/ThongTinTaiKhoan`,
    });

    dispatch(createAction(actionTypes.SET_USER_INFO, res.data.content));
  } catch (err) {
    console.log(err);
  }
};
