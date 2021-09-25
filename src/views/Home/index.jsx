import React, { useEffect } from "react";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Banner from "../../components/Banner";
import News from "../../components/News";
import ShowtimeMovie from "../../components/ShowtimeMovie";
import { fetchBannerList } from "../../store/actions/bannerAction";
import { fetchMovieList } from "../../store/actions/movieAction";

const Home = () => {
  const dispatch = useDispatch();
  const bannerList = useSelector((state) => state.bannerReducer.bannerList);
  const movieList = useSelector((state) => state.movieReducer.movieList);

  useEffect(() => {
    dispatch(fetchBannerList);
    dispatch(fetchMovieList);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      <Banner bannerList={bannerList} />
      <ShowtimeMovie movieList={movieList} />
      <News />
    </Fragment>
  );
};

export default Home;
