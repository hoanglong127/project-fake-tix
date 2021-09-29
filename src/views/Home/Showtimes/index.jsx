import React, { Fragment } from "react";
import { Tabs } from "antd";
import Slider from "react-slick";
import "./style.css";
import MovieItem from "../../../components/MovieItem";
import ShowtimeMovieMobile from "./Mobile";
import { IconArrowNext, IconArrowPrev } from "../../../assets/images";

const { TabPane } = Tabs;

function NextArrow(props) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="absolute top-1/2 -right-8 lg:-right-12 transform -translate-y-1/2 cursor-pointer"
    >
      <img className="w-8 lg:w-11" src={IconArrowNext} alt="IconArrowNext" />
    </div>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="absolute top-1/2 -left-8 lg:-left-12 transform -translate-y-1/2 cursor-pointer"
    >
      <img className="w-8 lg:w-11" src={IconArrowPrev} alt="IconArrowPrev" />
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

const ShowtimeMovie = ({ movieList, handleOpenModalTrailer }) => {
  const moviesShowing = movieList.filter((movie) => movie.dangChieu);
  const moviesComing = movieList.filter((movie) => movie.sapChieu);

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
    </Fragment>
  );
};

export default ShowtimeMovie;
