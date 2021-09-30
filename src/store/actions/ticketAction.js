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

      dispatch(
        createAction(actionTypes.SET_TICKET_ROOM_INFO, res.data.content)
      );
    } catch (err) {
      console.log(err);
    }
  };
};

// ĐẶT VÉ
export const bookTickets = (id, list, alertSuccess) => {
  return async (dispatch) => {
    try {
      await request({
        method: "POST",
        url: `${DOMAIN}/api/QuanLyDatVe/DatVe`,
        data: {
          maLichChieu: id,
          danhSachVe: list,
        },
      });

      alertSuccess();
      dispatch(createAction(actionTypes.CLEAR_SEATS));
      dispatch(createAction(actionTypes.SET_ACTIVED_TAB, "Result"));
    } catch (err) {
      console.log(err);
    }
  };
};
