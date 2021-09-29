import React, { Fragment } from "react";
import { Tabs } from "antd";
import moment from "moment";

const { TabPane } = Tabs;

const ShowtimesTabs = ({ heThongRapChieu }) => {
  const renderTheater = (theaterList) => {
    return theaterList.map((theater) => (
      <div
        key={theater.maCumRap}
        className="movieDetail-theaters-item py-5 border-b border-gray-100"
      >
        <div className="flex items-center mb-4">
          <img className="w-12" src={theater.hinhAnh} alt={theater.tenCumRap} />
          <div className="ml-3 text-xs md:text-sm">
            <p className="font-medium">
              <span className="text-red-500">
                {theater.tenCumRap.substr(0, theater.tenCumRap.indexOf(" - "))}
              </span>
              <span>
                {theater.tenCumRap.substr(theater.tenCumRap.indexOf(" - "))}
              </span>
            </p>
            <p className="text-gray-500">{theater.diaChi}</p>
          </div>
        </div>
        <div className="flex gap-3 flex-wrap">
          {theater.lichChieuPhim.map((showtime) => (
            <button
              key={showtime.maLichChieu}
              className="px-2 py-1 text-green-500 text-sm md:text-base bg-gray-100 border border-gray-200 rounded-md"
            >
              {moment(showtime.ngayChieuGioChieu).format("hh:mm A")}
            </button>
          ))}
        </div>
      </div>
    ));
  };

  return (
    <Fragment>
      {/* DESKTOP */}
      <div className="hidden md:block">
        <Tabs className="bg-white rounded-lg" tabPosition="left">
          {heThongRapChieu.map((system) => (
            <TabPane
              tab={
                <div className="flex items-center">
                  <img
                    className="w-12"
                    src={system.logo}
                    alt={system.tenHeThongRap}
                  />
                  <span className="ml-3 text-sm text-black uppercase">
                    {system.tenHeThongRap}
                  </span>
                </div>
              }
              key={system.maHeThongRap}
            >
              <div className="py-2 pr-6">
                {renderTheater(system.cumRapChieu)}
              </div>
            </TabPane>
          ))}
        </Tabs>
      </div>

      {/* MOBILE */}
      <div className="block md:hidden">
        <Tabs className="bg-white rounded-lg p-3" tabPosition="top">
          {heThongRapChieu.map((system) => (
            <TabPane
              tab={
                <img
                  className="w-12"
                  src={system.logo}
                  alt={system.tenHeThongRap}
                />
              }
              key={system.maHeThongRap}
            >
              <div className="py-2 pr-6">
                {renderTheater(system.cumRapChieu)}
              </div>
            </TabPane>
          ))}
        </Tabs>
      </div>
    </Fragment>
  );
};

export default ShowtimesTabs;
