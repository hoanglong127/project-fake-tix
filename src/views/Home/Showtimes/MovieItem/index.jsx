import React from "react";
import moment from "moment";
import { Rate } from "antd";
import { Link } from "react-router-dom";
import "./style.css";
import PlayVideoIcon from "../../../../assets/images/play-video.png";

const MovieItem = ({ movie, handleOpenModalTrailer }) => {
  return (
    <div className={`md:p-4 ${movie.dangChieu && "film"}`}>
      <div className="group relative rounded-md overflow-hidden">
        <Link to={`/detail/${movie.maPhim}`}>
          <img
            className="w-full h-60 md:h-80 object-cover"
            src={movie.hinhAnh}
            alt={movie.tenPhim}
          />
          <div
            className="hidden md:block opacity-0 group-hover:opacity-100 absolute top-0 w-full h-full transition-all"
            style={{
              background: "linear-gradient(to top,#000,transparent 100%)",
            }}
          ></div>
          {movie.dangChieu ? (
            <div
              className="film-rating absolute top-2 right-2 text-center px-2 pt-1 rounded-md"
              style={{ backgroundColor: "rgba(12,27,54,.8)" }}
            >
              <p className="-mb-2 text-base text-white">{movie.danhGia}</p>
              <Rate
                allowHalf
                defaultValue={(movie.danhGia * 5) / 10}
                disabled
              />
            </div>
          ) : (
            <div
              className="absolute top-2 right-2 text-center px-2 py-1 rounded-md"
              style={{ backgroundColor: "rgba(12,27,54,.8)" }}
            >
              <p className="mb-0 text-base text-white">
                {moment(movie.ngayKhoiChieu).format("DD/MM")}
              </p>
            </div>
          )}
        </Link>
        <button
          onClick={() => handleOpenModalTrailer(movie.trailer)}
          className="hidden md:block opacity-0 group-hover:opacity-100 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all"
        >
          <img
            className="w-12 hover:opacity-70 transition-all"
            src={PlayVideoIcon}
            alt="PlayVideoIcon"
          />
        </button>
      </div>
      <div className="md:h-20">
        <div className="film-info mt-3">
          <div className="flex items-center">
            <span className="bg-red-600 text-white px-1 rounded mr-2">C18</span>
            <h4 className="text-base font-bold truncate mb-0">
              {movie.tenPhim}
            </h4>
          </div>
          <p className="hidden md:block mt-3 text-base text-gray-600 mb-0">
            120 phút
          </p>
        </div>
        <Link
          to={`/detail/${movie.maPhim}`}
          className="film-btn hidden bg-red-500 hover:bg-red-600 text-white hover:text-white text-center text-lg w-full py-2 mt-3 rounded-md transition-all duration-300"
        >
          Đặt vé
        </Link>
      </div>
    </div>
  );
};

export default MovieItem;
