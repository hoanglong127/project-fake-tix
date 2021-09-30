import React, { Fragment, useEffect } from "react";
import { Tabs } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import "./style.css";
import { IconInfo, Screen } from "../../assets/images";
import { fetchTicketRoomInfo } from "../../store/actions/ticketAction";
import createAction from "../../store/actions";
import actionTypes from "../../store/types";
import _ from "lodash";

const { TabPane } = Tabs;

const Checkout = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.authReducer.userInfo);
  const { ticketRoomInfo, seatBookingList } = useSelector(
    (state) => state.ticketReducer
  );

  const { thongTinPhim, danhSachGhe } = ticketRoomInfo;

  useEffect(() => {
    const { id } = params;
    dispatch(fetchTicketRoomInfo(id));
    dispatch(createAction(actionTypes.CLEAR_SEATS));
  }, []);

  const handleClickSeat = (seat) => {
    dispatch(createAction(actionTypes.ADD_SEAT, seat));
  };

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
        <Tabs defaultActiveKey="1">
          <TabPane tab="01 Đặt vé" key="1">
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
                  <button className="w-full mt-8 py-3 bg-green-400 text-white text-2xl rounded">
                    Đặt vé
                  </button>
                </div>
              </div>
            </div>
          </TabPane>
          <TabPane tab="02 Lịch sử đặt vé" key="2"></TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default Checkout;
