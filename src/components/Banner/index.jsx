import { Carousel } from "antd";
import React from "react";
import "./style.css";

const Banner = (props) => {
  return (
    <div className="pt-16">
      <Carousel autoplay>
        {props.bannerList.map((item) => (
          <div key={item.maBanner}>
            <div
              className="banner-item bg-cover bg-no-repeat bg-center"
              style={{
                backgroundImage: `url('${item.hinhAnh}')`,
              }}
            ></div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
