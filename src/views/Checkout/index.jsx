import React, { useEffect } from "react";
import Swal from "sweetalert2";
import { Tabs } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import "./style.css";
import TicketRoom from "./TicketRoom";
import HistoryBook from "./HistoryBook";
import createAction from "../../store/actions";
import actionTypes from "../../store/types";
import {
  bookTickets,
  fetchTicketRoomInfo,
} from "../../store/actions/ticketAction";
import { fetchUserInfo } from "../../store/actions/authAction";
import UserAvatar from "../../components/UserAvatar";
import { Background } from "../../assets/images";

const { TabPane } = Tabs;

const Checkout = () => {
  const params = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.authReducer.userInfo);
  const { ticketRoomInfo, seatBookingList, activedTab } = useSelector(
    (state) => state.ticketReducer
  );

  const { thongTinPhim, danhSachGhe } = ticketRoomInfo;

  useEffect(() => {
    const { id } = params;

    async function fetchAPI() {
      dispatch(createAction(actionTypes.DISPLAY_LOADING));

      await dispatch(fetchTicketRoomInfo(id));

      dispatch(createAction(actionTypes.CLEAR_SEATS));
      dispatch(createAction(actionTypes.SET_ACTIVED_TAB, "TicketRoom"));
      dispatch(createAction(actionTypes.HIDE_LOADING));
    }
    fetchAPI();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Xử lý đặt vé
  const handleBookTickets = () => {
    Swal.fire({
      icon: "info",
      title: "Thông tin đặt vé sẽ được gửi qua email",
      text: "Hãy kiểm tra thông tin trước khi xác nhận!",
      showCancelButton: true,
      confirmButtonText: "Đồng ý",
      cancelButtonText: "Huỷ",
    }).then((res) => {
      if (res.isConfirmed) {
        const { id } = params;
        dispatch(
          bookTickets(id, seatBookingList, () => {
            Swal.fire({
              icon: "success",
              title: "Đặt vé thành công",
            });
            dispatch(fetchUserInfo);
          })
        );
      }
    });
  };

  // Xử lý thêm ghế vào danh sách ghế đang đặt
  const handleClickSeat = (seat) => {
    dispatch(createAction(actionTypes.ADD_SEAT, seat));
  };

  // Xử lý quay lại trang trước
  const handleClickGoBack = () => {
    history.goBack();
  };

  return (
    <div
      className="checkout lg:px-10 bg-contain bg-center"
      style={{
        backgroundImage: `url(${Background})`,
      }}
    >
      <div className="bg-white p-5 min-h-screen">
        <div className="flex items-center justify-between">
          <button
            onClick={handleClickGoBack}
            className="flex items-center text-base italic underline text-gray-600 hover:text-gray-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span>Quay lại</span>
          </button>
          <div className="flex items-center">
            <UserAvatar userInfo={userInfo} />
          </div>
        </div>
        <Tabs activeKey={activedTab} defaultActiveKey="TicketRoom" centered>
          <TabPane tab="01 Đặt vé" key="TicketRoom">
            <TicketRoom
              userInfo={userInfo}
              thongTinPhim={thongTinPhim}
              danhSachGhe={danhSachGhe}
              seatBookingList={seatBookingList}
              handleClickSeat={handleClickSeat}
              handleBookTickets={handleBookTickets}
            />
          </TabPane>
          <TabPane tab="02 Kết quả đặt vé" key="HistoryBook">
            <HistoryBook userInfo={userInfo} />
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default Checkout;
