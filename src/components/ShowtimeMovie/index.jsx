import { Tabs } from "antd";
import React, { Fragment, useState } from "react";
import "./style.css";
import backSession from "../../assets/images/back-session.png";
import nextSession from "../../assets/images/next-session.png";
import Slider from "react-slick";
import ModalVideo from "react-modal-video";
import MovieItem from "../MovieItem";
import ShowtimeMovieMobile from "./Mobile";

const { TabPane } = Tabs;

function NextArrow(props) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="absolute top-1/2 -right-8 lg:-right-12 transform -translate-y-1/2 cursor-pointer"
    >
      <img className="w-8 lg:w-11" src={nextSession} alt="nextSession" />
    </div>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      // style={{ left: "-50px" }}
      onClick={onClick}
      className="absolute top-1/2 -left-8 lg:-left-12 transform -translate-y-1/2 cursor-pointer"
    >
      <img className="w-8 lg:w-11" src={backSession} alt="backSession" />
    </div>
  );
}

const settings = {
  speed: 500,
  rows: 2,
  autoplay: true,
  autoplaySpeed: 4000,
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
  const moviesShowing = movieList.filter((movie) => movie.dangChieu);
  const moviesComing = movieList.filter((movie) => movie.sapChieu);
  const [isModalTrailer, setIsModalTrailer] = useState(false);
  const [trailerId, setTrailerId] = useState(null);

  const handleOpenModalTrailer = (trailerURL) => {
    setIsModalTrailer(true);
    setTrailerId(trailerURL.substr(trailerURL.lastIndexOf("/")));
  };

  return (
    <Fragment>
      <div id="lichChieu" className="showtimeMovie container mx-auto pt-16">
        <Tabs centered defaultActiveKey="DangChieu">
          <TabPane tab="Đang chiếu" key="DangChieu">
            <div className="hidden md:block">
              <Slider {...settings}>
                {moviesShowing.map((movie) => (
                  <MovieItem
                    key={movie.maPhim}
                    movie={movie}
                    handleOpenModalTrailer={handleOpenModalTrailer}
                  />
                ))}
              </Slider>
            </div>
            <ShowtimeMovieMobile movieList={moviesShowing} />
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
