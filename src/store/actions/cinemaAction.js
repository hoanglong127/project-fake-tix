import createAction from ".";
import { request } from "../../api/request";
import { DOMAIN, GROUP_ID } from "../../utils/settings";
import actionTypes from "../types";

// LẤY THÔNG TIN HỆ THỐNG RẠP
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

// LẤY THÔNG TIN LỊCH CHIẾU HỆ THỐNG RẠP
export const fetchTheaterSystemShowtime = async (dispatch) => {
  try {
    const res = await request({
      method: "GET",
      url: `${DOMAIN}/api/QuanLyRap/LayThongTinLichChieuHeThongRap`,
      params: { MaNhom: GROUP_ID },
    });

    dispatch(
      createAction(actionTypes.SET_THEATER_SYSTEM_SHOWTIME, res.data.content)
    );
  } catch (err) {
    console.log(err);
  }
};

// LẤY THÔNG TIN LỊCH CHIẾU PHIM
export const fetchMovieShowtimeInfo = (movieId) => {
  return async (dispatch) => {
    try {
      const res = await request({
        method: "GET",
        url: `${DOMAIN}/api/QuanLyRap/LayThongTinLichChieuPhim`,
        params: { MaPhim: movieId },
      });

      console.log(res);
      dispatch(
        createAction(actionTypes.SET_MOVIE_SHOWTIME_INFO, res.data.content)
      );
    } catch (err) {
      console.log(err);
    }
  };
};
