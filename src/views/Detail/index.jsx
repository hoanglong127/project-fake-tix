import React, { Fragment, useEffect, useState } from "react";
import moment from "moment";
import ModalVideo from "react-modal-video";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Rate, Tabs } from "antd";
import { scroller } from "react-scroll";
import "./style.css";
import ShowtimesTabs from "./ShowtimesTabs";
import MainLayout from "../../HOCs/Layouts/MainLayout";
import { fetchMovieShowtimeInfo } from "../../store/actions/cinemaAction";
import { IconPlayVideo } from "../../assets/images";

const { TabPane } = Tabs;

const Detail = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const movieShowtimeInfo = useSelector(
    (state) => state.cinemaReducer.movieShowtimeInfo
  );
  const [isModalTrailer, setIsModalTrailer] = useState(false);
  const [trailerId, setTrailerId] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0 });
    const movieId = params.id;
    dispatch(fetchMovieShowtimeInfo(movieId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleBuyTickket = (id) => {
    scroller.scrollTo(id, {
      duration: 800,
      smooth: "easeInOutQuart",
    });
  };

  const handleOpenModalTrailer = (trailerURL) => {
    setIsModalTrailer(!isModalTrailer);
    setTrailerId(trailerURL.substr(trailerURL.lastIndexOf("/")));
  };

  return (
    <Fragment>
      <MainLayout>
        <div className="movieDetail pt-16">
          <div className="py-32 relative">
            <div
              className="movieDetail-bg absolute top-0 left-0 right-0 bottom-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('${movieShowtimeInfo?.hinhAnh}')`,
              }}
            ></div>
            <div
              className="absolute top-0 left-0 right-0 bottom-0"
              style={{
                background:
                  "linear-gradient(to top, rgb(10, 32, 41), transparent 100%)",
              }}
            ></div>
            <div className="relative max-w-4xl mx-auto px-3 flex items-center">
              <div className="group relative w-1/3">
                <img
                  className="w-full object-cover rounded-md"
                  src={movieShowtimeInfo?.hinhAnh}
                  alt={movieShowtimeInfo?.tenPhim}
                />
                <button
                  onClick={() =>
                    handleOpenModalTrailer(movieShowtimeInfo?.trailer)
                  }
                  className="opacity-0 group-hover:opacity-100 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300"
                >
                  <img src={IconPlayVideo} alt="IconPlayVideo" />
                </button>
              </div>
              <div className="px-4 w-2/3 text-white text-sm md:text-base">
                <span>
                  {moment(movieShowtimeInfo?.ngayKhoiChieu).format(
                    "DD.MM.YYYY"
                  )}
                </span>
                <div className="flex items-center my-1">
                  <h2 className="text-white text-base md:text-xl font-medium mb-0">
                    <span className="bg-red-500 px-1 mr-1 text-base rounded-sm">
                      C18
                    </span>
                    <span>{movieShowtimeInfo?.tenPhim}</span>
                  </h2>
                </div>
                <p className="mb-4">120 phút - 7 IMDb - 2D/Digitals</p>
                <button
                  onClick={() => handleBuyTickket("lichChieu")}
                  className="px-4 py-1 bg-red-500 hover:bg-red-600 text-white text-base md:text-lg rounded transition-all duration-300"
                >
                  Mua vé
                </button>
                <button
                  onClick={() =>
                    handleOpenModalTrailer(movieShowtimeInfo?.trailer)
                  }
                  className="inline-block md:hidden ml-2 px-4 py-1 bg-green-500 hover:bg-green-600 text-white text-base md:text-lg rounded transition-all duration-300"
                >
                  Trailer
                </button>
              </div>
              <div className="hidden md:block w-1/4 text-center">
                <div
                  className={`c100 p${
                    (movieShowtimeInfo?.danhGia * 100) / 10
                  } green mx-auto`}
                >
                  <span>{movieShowtimeInfo?.danhGia}</span>
                  <div className="slice">
                    <div className="bar"></div>
                    <div className="fill"></div>
                  </div>
                </div>
                <Rate
                  allowHalf
                  value={movieShowtimeInfo?.danhGia / 2}
                  disabled
                />
                <p className="text-white mt-1 mb-0">16 người đánh giá</p>
              </div>
            </div>
          </div>

          <div
            id="lichChieu"
            className="relative -mt-1 pb-32"
            style={{ backgroundColor: "#0a2029" }}
          >
            <div className="max-w-4xl px-3 mx-auto">
              <Tabs defaultActiveKey="LichChieu" centered>
                {movieShowtimeInfo?.dangChieu && (
                  <TabPane
                    className="movieDetail-theaters"
                    tab="Lịch chiếu"
                    key="LichChieu"
                  >
                    <ShowtimesTabs
                      heThongRapChieu={movieShowtimeInfo?.heThongRapChieu || []}
                    />
                  </TabPane>
                )}
                <TabPane tab="Thông tin" key="ThongTin">
                  <div className="md:flex text-white text-sm md:text-base">
                    <div className="md:w-1/2">
                      <div className="flex mb-3">
                        <p className="w-1/3 font-medium">Ngày công chiếu</p>
                        <p className="w-2/3 md:w-1/2">
                          {moment(movieShowtimeInfo?.ngayKhoiChieu).format(
                            "DD.MM.YYYY"
                          )}
                        </p>
                      </div>
                      <div className="flex mb-3">
                        <p className="w-1/3 font-medium">Đạo diễn</p>
                        <p className="w-2/3 md:w-1/2">Adam Wingard</p>
                      </div>
                      <div className="flex mb-3">
                        <p className="w-1/3 font-medium">Diễn viên</p>
                        <p className="w-2/3 md:w-1/2">
                          Kyle Chandler, Rebecca Hall, Eiza González, Millie
                          Bobby Brown
                        </p>
                      </div>
                      <div className="flex mb-3">
                        <p className="w-1/3 font-medium">Thể Loại</p>
                        <p className="w-2/3 md:w-1/2">
                          hành động, giả tưởng, ly kỳ, thần thoại
                        </p>
                      </div>
                      <div className="flex mb-3">
                        <p className="w-1/3 font-medium">Định dạng</p>
                        <p className="w-2/3 md:w-1/2">2D/Digital</p>
                      </div>
                    </div>
                    <div className="md:w-1/2">
                      <p className="font-medium mb-3">Nội dung</p>
                      <p>{movieShowtimeInfo?.moTa}</p>
                    </div>
                  </div>
                </TabPane>
              </Tabs>
            </div>
          </div>
        </div>
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

export default Detail;
