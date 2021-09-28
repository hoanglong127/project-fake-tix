import React from "react";
import { Tabs } from "antd";
import "./style.css";

const { TabPane } = Tabs;

const News = ({ newsList }) => {
  const renderNews = (type) => {
    const list = newsList.filter((item) => item.loaiTin === type);

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {list.map((item) => (
          <div key={item.maTin}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <img
                className="rounded-md"
                src={item.hinhAnh}
                alt={item.tenTin}
              />
            </a>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <h3 className="news-title mt-3 mb-1 text-base hover:text-red-500 transition-all duration-300">
                {item.tenTin}
              </h3>
            </a>
            <p className="news-desc mb-0 text-sm overflow-ellipsis overflow-hidden">
              {item.moTa}
            </p>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div id="tinTuc" className="news container mx-auto pt-16">
      <Tabs centered defaultActiveKey="dienAnh">
        <TabPane tab="Điện ảnh 24h" key="dienAnh">
          {renderNews("dien-anh")}
        </TabPane>
        <TabPane tab="Review" key="review">
          {renderNews("review")}
        </TabPane>
        <TabPane tab="Khuyến mãi" key="khuyenMai">
          {renderNews("khuyen-mai")}
        </TabPane>
      </Tabs>
    </div>
  );
};

export default News;
