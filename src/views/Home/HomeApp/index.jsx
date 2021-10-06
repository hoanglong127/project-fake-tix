import React from "react";
import Slider from "react-slick";
import "./style.css";
import {
  BackgroundApp,
  Mobile,
  SlideApp1,
  SlideApp10,
  SlideApp11,
  SlideApp12,
  SlideApp13,
  SlideApp14,
  SlideApp15,
  SlideApp16,
  SlideApp2,
  SlideApp3,
  SlideApp4,
  SlideApp5,
  SlideApp6,
  SlideApp7,
  SlideApp8,
  SlideApp9,
} from "../../../assets/images";

const settings = {
  autoplay: true,
  autoplaySpeed: 3000,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
};

const HomeApp = () => {
  return (
    <div
      id="ungDung"
      className="homeApp"
      style={{ backgroundImage: `url("${BackgroundApp}")` }}
    >
      <div className="container mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col justify-center">
            <div className="text-white text-base text-center md:text-left max-w-md">
              <h4 className="text-white text-2xl md:text-4xl font-bold">
                Ứng dụng tiện lợi dành cho người yêu điện ảnh
              </h4>
              <p className="my-7">
                Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp
                và đổi quà hấp dẫn.
              </p>
              <a
                href="https://apps.apple.com/us/app/123phim-mua-ve-lien-tay-chon/id615186197"
                className="bg-red-500 hover:bg-red-600 hover:text-white px-5 py-3 rounded transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                App miễn phí - tải về ngay
              </a>
              <p className="mt-5">
                TIX có hai phiên bản{" "}
                <a
                  href="https://apps.apple.com/us/app/123phim-mua-ve-lien-tay-chon/id615186197"
                  className="underline hover:text-white hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  iOS
                </a>{" "}
                &{" "}
                <a
                  href="https://play.google.com/store/apps/details?id=vn.com.vng.phim123"
                  className="underline hover:text-white hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Android
                </a>
              </p>
            </div>
          </div>
          <div className="relative">
            <img className="homeApp-mobile" src={Mobile} alt="Mobile" />
            <Slider
              className="homeApp-slider w-full absolute top-0"
              {...settings}
            >
              <div>
                <img src={SlideApp1} alt="SlideApp1" />
              </div>
              <div>
                <img src={SlideApp2} alt="SlideApp2" />
              </div>
              <div>
                <img src={SlideApp3} alt="SlideApp3" />
              </div>
              <div>
                <img src={SlideApp4} alt="SlideApp4" />
              </div>
              <div>
                <img src={SlideApp5} alt="SlideApp5" />
              </div>
              <div>
                <img src={SlideApp6} alt="SlideApp6" />
              </div>
              <div>
                <img src={SlideApp7} alt="SlideApp7" />
              </div>
              <div>
                <img src={SlideApp8} alt="SlideApp8" />
              </div>
              <div>
                <img src={SlideApp9} alt="SlideApp9" />
              </div>
              <div>
                <img src={SlideApp10} alt="SlideApp10" />
              </div>
              <div>
                <img src={SlideApp11} alt="SlideApp11" />
              </div>
              <div>
                <img src={SlideApp12} alt="SlideApp12" />
              </div>
              <div>
                <img src={SlideApp13} alt="SlideApp13" />
              </div>
              <div>
                <img src={SlideApp14} alt="SlideApp14" />
              </div>
              <div>
                <img src={SlideApp15} alt="SlideApp15" />
              </div>
              <div>
                <img src={SlideApp16} alt="SlideApp16" />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeApp;
