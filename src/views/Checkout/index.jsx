import React, { useEffect } from "react";
import Swal from "sweetalert2";
import { Tabs } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
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

const { TabPane } = Tabs;

const Checkout = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.authReducer.userInfo);
  const { ticketRoomInfo, seatBookingList, activedTab } = useSelector(
    (state) => state.ticketReducer
  );

  const { thongTinPhim, danhSachGhe } = ticketRoomInfo;

  useEffect(() => {
    const { id } = params;
    dispatch(fetchTicketRoomInfo(id));
    dispatch(createAction(actionTypes.CLEAR_SEATS));
    dispatch(createAction(actionTypes.SET_ACTIVED_TAB, "TicketRoom"));
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

  return (
    <div className="checkout p-5 lg:px-10 pb-4">
      <div className="flex items-center justify-center md:justify-start">
        <div className="flex items-center pr-3 mr-3 border-r">
          <UserAvatar userInfo={userInfo} />
        </div>
        <Link
          to="/"
          className="text-base italic underline hover:underline text-purple-500 hover:text-purple-700"
        >
          Quay lại trang chủ
        </Link>
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
  );
};

export default Checkout;
