import createAction from ".";
import { request } from "../../api/request";
import { DOMAIN } from "../../utils/settings";
import actionTypes from "../types";

// LẤY THÔNG TIN PHÒNG VÉ
export const fetchTicketRoomInfo = (id) => {
  return async (dispatch) => {
    try {
      const res = await request({
        method: "GET",
        url: `${DOMAIN}/api/QuanLyDatVe/LayDanhSachPhongVe`,
        params: { MaLichChieu: id },
      });

      console.log(res);
      dispatch(
        createAction(actionTypes.SET_TICKET_ROOM_INFO, res.data.content)
      );
    } catch (err) {
      console.log(err);
    }
  };
};
