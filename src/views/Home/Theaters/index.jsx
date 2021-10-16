import React from "react";
import { Tabs } from "antd";
import moment from "moment";
import { Link } from "react-router-dom";
import "./style.css";

const { TabPane } = Tabs;

const Theaters = ({ theaterSystemShowtime }) => {
  const renderMovieList = (list) => {
    const moviesShowing = list.filter((movie) => movie.dangChieu);

    if (moviesShowing.length === 0)
      return <p className="text-center text-lg py-5">Không có suất chiếu</p>;

    return moviesShowing.map((movie) => (
      <div
        key={movie.maPhim}
        className="theater-movies-item py-5 border-b border-gray-100"
      >
        <div className="flex items-center">
          <img
            className="w-12 h-12 object-cover"
            src={movie.hinhAnh}
            alt={movie.tenPhim}
          />
          <div className="pl-3">
            <h5 className="mb-0 font-medium text-base">{movie.tenPhim}</h5>
            <p className="mb-0 text-sm">120 phút - Điểm TIX 10</p>
          </div>
        </div>
        <div className="flex gap-3 flex-wrap mt-5">
          {movie.lstLichChieuTheoPhim.map((showtime) => (
            <Link
              to={`/checkout/${showtime.maLichChieu}`}
              key={showtime.maLichChieu}
              className="px-2 py-1 text-green-500 hover:text-green-600 text-base bg-gray-100 hover:bg-gray-200 border border-gray-200 rounded-md transition-all duration-300"
            >
              {moment(showtime.ngayChieuGioChieu).format("HH:mm A")}
            </Link>
          ))}
        </div>
      </div>
    ));
  };

  return (
    <div
      id="cumRap"
      className="theaters hidden md:block container mx-auto pt-16 "
    >
      <Tabs className="border border-gray-100" tabPosition={"left"}>
        {theaterSystemShowtime.map((sys) => (
          <TabPane
            tab={
              <img
                className="w-12 h-12 object-cover"
                src={sys.logo}
                alt={sys.tenHeThongRap}
              />
            }
            key={sys.maHeThongRap}
          >
            <Tabs className="theaters-item" tabPosition={"left"}>
              {sys.lstCumRap.map((theater, index) => (
                <TabPane
                  tab={
                    <div className="flex items-center">
                      <img
                        className="w-12 h-12 object-cover"
                        src={theater.hinhAnh}
                        alt={theater.tenCumRap}
                      />
                      <div className="pl-3">
                        <h5 className="theaters-item-info truncate mb-0 font-medium text-sm">
                          <span className="text-red-500 ">
                            {theater.tenCumRap.substr(
                              0,
                              theater.tenCumRap.indexOf(" ")
                            )}
                          </span>
                          {theater.tenCumRap.substr(
                            theater.tenCumRap.indexOf(" - ")
                          )}
                        </h5>
                        <p className="theaters-item-info mb-0 truncate max-w-xs text-xs text-gray-400">
                          {theater.diaChi}
                        </p>
                      </div>
                    </div>
                  }
                  key={`${theater.maCumRap}-${index}`}
                >
                  <div className="theater-movies px-6 py-2">
                    {renderMovieList(theater.danhSachPhim)}
                  </div>
                </TabPane>
              ))}
            </Tabs>
          </TabPane>
        ))}
      </Tabs>
    </div>
  );
};

export default Theaters;
