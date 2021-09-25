import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import PlayVideoIcon from "../../assets/images/play-video.png";

const MovieItem = ({ movie, handleOpenModalTrailer }) => {
  return (
    <div className={`p-4 ${movie.dangChieu && "film"}`}>
      <div className="group relative rounded-md overflow-hidden">
        <Link to={`/detail/${movie.maPhim}`}>
          <img
            className="w-full h-80 object-cover"
            src={movie.hinhAnh}
            alt={movie.tenPhim}
          />
          <div
            className="opacity-0 group-hover:opacity-100 absolute top-0 w-full h-full transition-all"
            style={{
              background: "linear-gradient(to top,#000,transparent 100%)",
            }}
          ></div>
        </Link>
        <button
          onClick={() => handleOpenModalTrailer(movie.trailer)}
          className="opacity-0 group-hover:opacity-100 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all"
        >
          <img
            className="w-12 hover:opacity-70 transition-all"
            src={PlayVideoIcon}
            alt="PlayVideoIcon"
          />
        </button>
      </div>
      <div className="h-20">
        <div className="film-info mt-3">
          <div className="flex items-center">
            <span className="bg-red-600 text-white px-1 rounded mr-2">C18</span>
            <h4 className="text-base font-bold truncate mb-0">
              {movie.tenPhim}
            </h4>
          </div>
          <p className="mt-3 text-base text-gray-600 mb-0">120 phút</p>
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
