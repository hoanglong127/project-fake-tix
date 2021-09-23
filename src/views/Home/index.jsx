import React, { useEffect } from "react";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Banner from "../../components/Banner";
import { fetchBannerList } from "../../store/actions/bannerAction";

const Home = () => {
  const dispatch = useDispatch();
  const bannerList = useSelector((state) => state.bannerReducer.bannerList);

  useEffect(() => {
    dispatch(fetchBannerList);
  }, []);

  return (
    <Fragment>
      <Banner bannerList={bannerList} />
    </Fragment>
  );
};

export default Home;
