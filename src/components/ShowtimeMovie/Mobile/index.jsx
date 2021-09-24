import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

const ShowtimeMovieMobile = (props) => {
  const { movieList, isShowing } = props;
  const [limit, setLimit] = useState(true);

  const handleSetLimit = () => {
    setLimit(!limit);
  };

  const renderMovieItem = () => {
    const newMovieList = limit
      ? movieList.filter((movie) => movie.dangChieu === isShowing).splice(0, 6)
      : movieList.filter((movie) => movie.dangChieu === isShowing);

    return newMovieList.map((movie) => (
      <div key={movie.maPhim}>
        <Link to={`/detail/${movie.maPhim}`}>
          <img
            className="w-full h-60 rounded-md"
            src={movie.hinhAnh}
            alt={movie.tenPhim}
          />
          <div className="flex items-center mt-3">
            <span className="bg-red-600 text-white px-1 rounded mr-2">C18</span>
            <h4 className="text-base font-bold mb-0 truncate">
              {movie.tenPhim}
            </h4>
          </div>
        </Link>
      </div>
    ));
  };

  return (
    <div className="md:hidden ">
      <div className="grid grid-cols-2 gap-5">{renderMovieItem()}</div>
      <div className="text-center mt-7">
        {limit ? (
          <button
            onClick={handleSetLimit}
            className="px-5 py-2 border border-gray-400 text-gray-600 text-base rounded"
          >
            Xem thêm
          </button>
        ) : (
          <button
            onClick={handleSetLimit}
            className="px-5 py-2 border border-gray-400 text-gray-600 text-base rounded"
          >
            Thu gọn
          </button>
        )}
      </div>
    </div>
  );
};

export default ShowtimeMovieMobile;
