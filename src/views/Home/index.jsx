import React, { useEffect } from "react";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Banner from "../../components/Banner";
import News from "../../components/News";
import ShowtimeMovie from "../../components/ShowtimeMovie";
import Theaters from "../../components/Theaters";
import { fetchBannerList } from "../../store/actions/bannerAction";
import { fetchTheaterSystemShowtime } from "../../store/actions/cinemaAction";
import { fetchMovieList } from "../../store/actions/movieAction";

const Home = () => {
  const dispatch = useDispatch();
  const bannerList = useSelector((state) => state.bannerReducer.bannerList);
  const movieList = useSelector((state) => state.movieReducer.movieList);
  const theaterSystemShowtime = useSelector(
    (state) => state.cinemaReducer.theaterSystemShowtime
  );

  useEffect(() => {
    dispatch(fetchBannerList);
    dispatch(fetchMovieList);
    dispatch(fetchTheaterSystemShowtime);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      <Banner bannerList={bannerList} />
      <ShowtimeMovie movieList={movieList} />
      <Theaters theaterSystemShowtime={theaterSystemShowtime} />
      <News />
    </Fragment>
  );
};

export default Home;
