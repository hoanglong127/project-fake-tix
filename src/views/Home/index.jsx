import React, { Fragment, useEffect, useState } from "react";
import ModalVideo from "react-modal-video";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Banner from "./Banner";
import Showtimes from "./Showtimes";
import Theaters from "./Theaters";
import News from "./News";
import MainLayout from "../../HOCs/Layouts/MainLayout";
import { fetchBannerList } from "../../store/actions/bannerAction";
import { fetchTheaterSystemShowtime } from "../../store/actions/cinemaAction";
import { fetchMovieList } from "../../store/actions/movieAction";
import newsList from "../../fake-data/news.json";

const Home = () => {
  const dispatch = useDispatch();
  const bannerList = useSelector((state) => state.bannerReducer.bannerList);
  const movieList = useSelector((state) => state.movieReducer.movieList);
  const theaterSystemShowtime = useSelector(
    (state) => state.cinemaReducer.theaterSystemShowtime
  );
  const [isModalTrailer, setIsModalTrailer] = useState(false);
  const [trailerId, setTrailerId] = useState(null);

  useEffect(() => {
    dispatch(fetchBannerList);
    dispatch(fetchMovieList);
    dispatch(fetchTheaterSystemShowtime);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOpenModalTrailer = (trailerURL) => {
    setIsModalTrailer(!isModalTrailer);
    setTrailerId(trailerURL.substr(trailerURL.lastIndexOf("/")));
  };

  return (
    <Fragment>
      <MainLayout>
        <Banner bannerList={bannerList} />
        <Showtimes
          movieList={movieList}
          handleOpenModalTrailer={handleOpenModalTrailer}
        />
        <Theaters theaterSystemShowtime={theaterSystemShowtime} />
        <News newsList={newsList} />
      </MainLayout>
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

export default Home;
