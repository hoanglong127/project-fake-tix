import createAction from ".";
import { request } from "../../api/request";
import { DOMAIN } from "../../utils/settings";
import actionTypes from "../types";

export const fetchBannerList = async (dispatch) => {
  try {
    const res = await request({
      method: "GET",
      url: `${DOMAIN}/api/QuanLyPhim/LayDanhSachBanner`,
    });

    dispatch(createAction(actionTypes.SET_BANNER_LIST, res.data.content));
  } catch (err) {
    console.log(err);
  }
};
