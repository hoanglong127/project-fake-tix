import _ from "lodash";
import React from "react";

const HistoryBook = ({ userInfo }) => {
  return (
    <div className="container py-5 mx-auto">
      <div className="text-center mb-5">
        <h2 className="text-2xl font-bold text-green-500 mb-2">
          Lịch sử đặt vé
        </h2>
        <p className="text-base">
          Hãy xem kĩ thông tin và đến xem phim đúng giờ bạn nhé!
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {userInfo.thongTinDatVe.map((ticket) => (
          <div key={ticket.maVe} className="p-5 shadow rounded-md">
            <div className="flex items-center">
              <img
                className="w-12 h-12 md:w-20 md:h-20 object-cover"
                src={ticket.hinhAnh}
                alt={ticket.tenPhim}
              />
              <h5 className="ml-3 text-base md:text-lg font-medium">
                {ticket.tenPhim}
              </h5>
            </div>
            <div className="mt-3 text-sm md:text-base">
              <p className="mb-1">Thời lượng: {ticket.thoiLuongPhim} phút</p>
              <p className="mb-1">
                Địa điểm: {ticket.danhSachGhe[0].tenHeThongRap} |{" "}
                {ticket.danhSachGhe[0].tenRap}
              </p>
              <p className="mb-1">Ghế đã đặt:</p>
              <div className="flex flex-wrap gap-2">
                {_.sortBy(ticket.danhSachGhe, ["tenGhe"]).map((seat) => (
                  <span
                    key={seat.maGhe}
                    className="px-2 py-1 bg-green-100 text-green-500 text-sm rounded"
                  >
                    {seat.tenGhe}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HistoryBook;
