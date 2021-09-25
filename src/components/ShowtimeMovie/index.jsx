import { Tabs } from "antd";
import React, { Fragment, useState } from "react";
import "./style.css";
import Slider from "react-slick";
import ModalVideo from "react-modal-video";
import MovieItem from "../MovieItem";
import ShowtimeMovieMobile from "./Mobile";

const { TabPane } = Tabs;

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className}`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className}`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

const settings = {
  speed: 500,
  rows: 2,
  centerPadding: 0,
  slidesToShow: 4,
  slidesToScroll: 4,
  swipeToSlide: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
  ],
};

const ShowtimeMovie = ({ movieList }) => {
  const moviesPlaying = movieList.filter((movie) => movie.dangChieu);
  const moviesComing = movieList.filter((movie) => movie.sapChieu);
  const [isModalTrailer, setIsModalTrailer] = useState(false);
  const [trailerId, setTrailerId] = useState(null);

  const handleOpenModalTrailer = (trailerURL) => {
    setIsModalTrailer(true);
    setTrailerId(trailerURL.substr(trailerURL.lastIndexOf("/")));
  };

  return (
    <Fragment>
      <div className="showtimeMovie container mx-auto mt-16">
        <Tabs centered defaultActiveKey="DangChieu">
          <TabPane tab="Đang chiếu" key="DangChieu">
            <div className="hidden md:block">
              <Slider {...settings}>
                {moviesPlaying.map((movie) => (
                  <MovieItem
                    key={movie.maPhim}
                    movie={movie}
                    handleOpenModalTrailer={handleOpenModalTrailer}
                  />
                ))}
              </Slider>
            </div>
            <ShowtimeMovieMobile movieList={moviesPlaying} />
          </TabPane>
          <TabPane tab="Sắp chiếu" key="SapChieu">
            <div className="hidden md:block">
              <Slider {...settings}>
                {moviesComing.map((movie) => (
                  <MovieItem
                    key={movie.maPhim}
                    movie={movie}
                    handleOpenModalTrailer={handleOpenModalTrailer}
                  />
                ))}
              </Slider>
            </div>
            <ShowtimeMovieMobile movieList={moviesComing} />
          </TabPane>
        </Tabs>
      </div>

      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isModalTrailer}
        videoId={trailerId}
        onClose={() => setIsModalTrailer(false)}
      />
    </Fragment>
  );
};

export default ShowtimeMovie;
