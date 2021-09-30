import React, { Fragment, useEffect } from "react";
import _ from "lodash";
import Swal from "sweetalert2";
import { Tabs } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "./style.css";
import createAction from "../../store/actions";
import actionTypes from "../../store/types";
import { IconInfo, Screen } from "../../assets/images";
import {
  bookTickets,
  fetchTicketRoomInfo,
} from "../../store/actions/ticketAction";
import { fetchUserInfo } from "../../store/actions/authAction";

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
    dispatch(createAction(actionTypes.SET_ACTIVED_TAB, "BookTickets"));
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

  // Render danh sách ghế
  const renderSeats = () => {
    return danhSachGhe.map((seat, index) => {
      const indexSeatBooking = seatBookingList.findIndex(
        (item) => item.maGhe === seat.maGhe
      );

      const classSeatVip = seat.loaiGhe === "Vip" ? "seatVip" : "";
      const classSeatBooked = seat.daDat ? "seatBooked" : "";
      const classSeatBooking = indexSeatBooking !== -1 ? "seatBooking" : "";

      return (
        <Fragment key={seat.maGhe}>
          <button
            onClick={() => handleClickSeat(seat)}
            className={`w-8 h-8 m-1 rounded seat ${classSeatVip} ${classSeatBooked} ${classSeatBooking}`}
          >
            {seat.tenGhe}
          </button>
          {(index + 1) % 16 === 0 && <br />}
        </Fragment>
      );
    });
  };

  return (
    <div className="checkout px-10 pb-4">
      <div>
        <Tabs activeKey={activedTab} defaultActiveKey="BookTickets">
          <TabPane tab="01 Đặt vé" key="BookTickets">
            <div className="flex gap-5">
              <div className="w-2/3">
                <img className="w-full" src={Screen} alt="Screen" />
                <div className="text-center">{renderSeats()}</div>
              </div>
              <div className="w-1/3 p-5 bg-gray-50">
                <div className="text-center mb-5">
                  <p className="mb-0 text-3xl text-green-500 font-bold">
                    {seatBookingList
                      .reduce((total, seat) => (total += seat.giaVe), 0)
                      .toLocaleString()}{" "}
                    đ
                  </p>
                </div>
                <hr />
                <div className="my-5">
                  <p className="text-lg font-medium mb-1">
                    {thongTinPhim.tenPhim}
                  </p>
                  <p className="text-base mb-1">{thongTinPhim.tenCumRap}</p>
                  <p className="text-base mb-0">
                    {thongTinPhim.ngayChieu} - {thongTinPhim.gioChieu} -{" "}
                    {thongTinPhim.tenRap}
                  </p>
                </div>
                <hr />
                <div className="my-5">
                  <div className="flex justify-between mb-2">
                    <span className="text-base text-red-500 font-medium">
                      Ghế
                    </span>
                    <span className="text-base text-green-500 font-medium">
                      {seatBookingList
                        .reduce((total, seat) => (total += seat.giaVe), 0)
                        .toLocaleString()}{" "}
                      đ
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {_.sortBy(seatBookingList, ["maGhe"]).map((seat) => (
                      <span
                        key={seat.maGhe}
                        className="px-2 py-1 bg-red-100 text-red-500 text-sm rounded"
                      >
                        G{seat.tenGhe}
                      </span>
                    ))}
                  </div>
                </div>
                <hr />
                <div className="my-5">
                  <p className="text-base text-gray-500 font-medium">Email</p>
                  <p className="text-sm mb-0">{userInfo.email}</p>
                </div>
                <hr />
                <div className="my-5">
                  <p className="text-base text-gray-500 font-medium">
                    Điện thoại
                  </p>
                  <p className="text-sm mb-0">{userInfo.soDt}</p>
                </div>
                <hr />
                <div className="my-5 text-center text-sm">
                  <p className="flex justify-center">
                    <img
                      className="w-4 h-4 mr-2"
                      src={IconInfo}
                      alt="IconInfo"
                    />
                    <span>Vé đã mua không thể đổi hoặc hoàn tiền</span>
                  </p>
                  <p>
                    Mã vé sẽ được gửi qua tin nhắn{" "}
                    <span className="text-yellow-500">ZMS</span> (tin nhắn Zalo)
                    và <span className="text-yellow-500">Email</span> đã nhập
                  </p>
                  <button
                    onClick={handleBookTickets}
                    className="w-full mt-8 py-3 bg-green-400 text-white text-2xl rounded"
                  >
                    Đặt vé
                  </button>
                </div>
              </div>
            </div>
          </TabPane>
          <TabPane tab="02 Kết quả đặt vé" key="Result">
            <div className="container py-5 mx-auto">
              <div className="text-center mb-5">
                <h2 className="text-2xl font-bold text-green-500 mb-2">
                  Lịch sử đặt vé
                </h2>
                <p className="text-base mb-2">
                  Hãy xem kĩ thông tin và đến xem phim đúng giờ bạn nhé!
                </p>
                <Link
                  to="/"
                  className="text-base italic underline hover:underline text-purple-500 hover:text-purple-700"
                >
                  Quay lại trang chủ
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-5">
                {userInfo.thongTinDatVe.map((ticket) => (
                  <div key={ticket.maVe} className="p-5 shadow rounded-md">
                    <div className="flex items-center">
                      <img
                        className="w-20 h-20 object-cover"
                        src={ticket.hinhAnh}
                        alt={ticket.tenPhim}
                      />
                      <div className="ml-3 text-sm">
                        <h5 className="text-lg font-medium">
                          {ticket.tenPhim}
                        </h5>
                        <p>Thời lượng: {ticket.thoiLuongPhim} phút</p>
                        <p>
                          Địa điểm: {ticket.danhSachGhe[0].tenHeThongRap} |
                          {ticket.danhSachGhe[0].tenRap}
                        </p>
                      </div>
                    </div>
                    <div className="mt-3">
                      <p className="text-base mb-1">Ghế đã đặt:</p>
                      <div className="flex flex-wrap gap-2">
                        {_.sortBy(ticket.danhSachGhe, ["tenGhe"]).map(
                          (seat) => (
                            <span
                              key={seat.maGhe}
                              className="px-2 py-1 bg-green-100 text-green-500 text-sm rounded"
                            >
                              {seat.tenGhe}
                            </span>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default Checkout;
