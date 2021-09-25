import createAction from ".";
import { request } from "../../api/request";
import { DOMAIN } from "../../utils/settings";
import actionTypes from "../types";

export const fetchTheaterSystemInfo = async (dispatch) => {
  try {
    const res = await request({
      method: "GET",
      url: `${DOMAIN}/api/QuanLyRap/LayThongTinHeThongRap`,
    });

    dispatch(
      createAction(actionTypes.SET_THEATER_SYSTEM_INFO, res.data.content)
    );
  } catch (err) {
    console.log(err);
  }
};
