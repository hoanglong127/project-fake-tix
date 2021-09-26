import { Rate } from "antd";
import React from "react";
import "./style.css";

const BlockRating = ({ point }) => {
  return (
    <div
      className="blockRating absolute top-2 right-2 text-center px-2 pt-1 rounded-md"
      style={{ backgroundColor: "rgba(12,27,54,.8)" }}
    >
      <p className="-mb-2 text-base text-white">{point}</p>
      <Rate allowHalf defaultValue={(point * 5) / 10} disabled />
    </div>
  );
};

export default BlockRating;
