import _ from "lodash";
import React, { Fragment, useEffect } from "react";
import { IconInfo, Screen } from "../../../assets/images";

const TicketRoom = ({
  userInfo,
  thongTinPhim,
  danhSachGhe,
  seatBookingList,
  handleClickSeat,
  handleBookTickets,
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

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
            className={`w-6 h-6 text-xs xl:w-8 xl:h-8 xl:text-sm rounded seat ${classSeatVip} ${classSeatBooked} ${classSeatBooking}`}
            disabled={seat.daDat}
          >
            {seat.tenGhe}
          </button>
          {(index + 1) % 16 === 0 && <br />}
        </Fragment>
      );
    });
  };

  return (
    <div className="flex flex-col lg:flex-row gap-5">
      <div className="w-full lg:w-2/3">
        <div className="overflow-x-auto">
          <div className="seatList pb-3">
            <img className="w-full" src={Screen} alt="Screen" />
            <div className="text-center">{renderSeats()}</div>
            <div className="grid grid-cols-4 gap-5 max-w-lg mx-auto mt-5 text-xs">
              <div className="flex flex-col items-center">
                <span className="block w-5 h-5 rounded seat"></span>
                <p className="text-center text-gray-600">Ghế thường</p>
              </div>
              <div className="flex flex-col items-center">
                <span className="block w-5 h-5 rounded seat seatVip"></span>
                <p className="text-center text-gray-600">Ghế Vip</p>
              </div>
              <div className="flex flex-col items-center">
                <span className="block w-5 h-5 rounded seat seatBooked"></span>
                <p className="text-center text-gray-600">Ghế đã được mua</p>
              </div>
              <div className="flex flex-col items-center">
                <span className="block w-5 h-5 rounded seat seatBooking"></span>
                <p className="text-center text-gray-600">Ghế đang chọn</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/3 p-5 bg-gray-50">
        <div className="text-center mb-5">
          <p className="mb-0 text-xl md:text-2xl text-green-500 font-bold">
            {seatBookingList
              .reduce((total, seat) => (total += seat.giaVe), 0)
              .toLocaleString()}{" "}
            đ
          </p>
        </div>
        <hr />
        <div className="my-5 text-sm md:text-base">
          <p className="font-medium mb-1">{thongTinPhim.tenPhim}</p>
          <p className="mb-1">{thongTinPhim.tenCumRap}</p>
          <p>
            {thongTinPhim.ngayChieu} - {thongTinPhim.gioChieu} -{" "}
            {thongTinPhim.tenRap}
          </p>
        </div>
        <hr />
        <div className="my-5">
          <div className="flex justify-between mb-2 text-sm md:text-base">
            <span className="text-red-500 font-medium">Ghế</span>
            <span className="text-green-500 font-medium">
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
                className="px-2 py-1 bg-red-100 text-red-500 text-xs md:text-sm rounded"
              >
                G{seat.tenGhe}
              </span>
            ))}
          </div>
        </div>
        <hr />
        <div className="my-5">
          <p className="text-sm md:text-base text-gray-500 font-medium">
            Email
          </p>
          <p className="text-xs md:text-sm mb-0">{userInfo?.email}</p>
        </div>
        <hr />
        <div className="my-5">
          <p className="text-sm md:text-base text-gray-500 font-medium">
            Điện thoại
          </p>
          <p className="text-xs md:text-sm mb-0">
            {userInfo?.soDt || "0987654321"}
          </p>
        </div>
        <hr />
        <div className="my-5 text-center text-xs md:text-sm">
          <p className="flex justify-center">
            <img className="w-4 h-4 mr-2" src={IconInfo} alt="IconInfo" />
            <span>Vé đã mua không thể đổi hoặc hoàn tiền</span>
          </p>
          <p>
            Mã vé sẽ được gửi qua tin nhắn{" "}
            <span className="text-yellow-500">ZMS</span> (tin nhắn Zalo) và{" "}
            <span className="text-yellow-500">Email</span> đã nhập
          </p>
          <button
            onClick={handleBookTickets}
            className="w-full mt-8 py-3 bg-green-400 text-white text-lg md:text-xl rounded"
          >
            Đặt vé
          </button>
        </div>
      </div>
    </div>
  );
};

export default TicketRoom;
