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

const ShowtimeMovie = (props) => {
  const [modalTrailer, setModalTrailer] = useState(false);
  const [trailerId, setTrailerId] = useState(null);

  const handleOpenModalTrailer = (trailerURL) => {
    setModalTrailer(true);
    setTrailerId(trailerURL.substr(trailerURL.lastIndexOf("/")));
  };

  return (
    <Fragment>
      <div className="showtimeMovie container mx-auto pt-16">
        <Tabs defaultActiveKey="DangChieu">
          <TabPane tab="Đang chiếu" key="DangChieu">
            <div className="hidden md:block">
              <Slider {...settings}>
                {props.movieList
                  .filter((movie) => movie.dangChieu)
                  .map((movie) => (
                    <MovieItem
                      movie={movie}
                      handleOpenModalTrailer={handleOpenModalTrailer}
                    />
                  ))}
              </Slider>
            </div>
            <ShowtimeMovieMobile movieList={props.movieList} isShowing={true} />
          </TabPane>
          <TabPane tab="Sắp chiếu" key="SapChieu">
            <div className="hidden md:block">
              <Slider {...settings}>
                {props.movieList
                  .filter((movie) => movie.sapChieu)
                  .map((movie) => (
                    <MovieItem
                      movie={movie}
                      handleOpenModalTrailer={handleOpenModalTrailer}
                    />
                  ))}
              </Slider>
            </div>
            <ShowtimeMovieMobile
              movieList={props.movieList}
              isShowing={false}
            />
          </TabPane>
        </Tabs>
      </div>

      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={modalTrailer}
        videoId={trailerId}
        onClose={() => setModalTrailer(false)}
      />
    </Fragment>
  );
};

export default ShowtimeMovie;
