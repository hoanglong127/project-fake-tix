import React, { useState } from "react";
import { scroller } from "react-scroll";
import MovieItem from "../../MovieItem";

const ShowtimeMovieMobile = ({ movieList }) => {
  const [isLimit, setIsLimit] = useState(true);

  const handleSetIsLimit = () => {
    if (!isLimit) {
      scroller.scrollTo("lichChieu", {
        duration: 800,
        smooth: "easeInOutQuart",
      });
    }

    setIsLimit(!isLimit);
  };

  const renderMovieItem = () => {
    const list = isLimit ? movieList.slice(0, 6) : movieList;
    return list.map((movie) => <MovieItem key={movie.maPhim} movie={movie} />);
  };

  return (
    <div className="md:hidden ">
      <div className="grid grid-cols-2 gap-5">{renderMovieItem()}</div>
      <div className="text-center mt-7">
        {isLimit ? (
          <button
            onClick={handleSetIsLimit}
            className="px-5 py-2 border border-gray-400 text-gray-600 text-base rounded"
          >
            Xem thêm
          </button>
        ) : (
          <button
            onClick={handleSetIsLimit}
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
