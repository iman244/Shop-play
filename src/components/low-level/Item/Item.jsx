import "./Item.css";
import React from "react";

const Item = ({ className, data }) => {
  return (
    <div className={className ? `il-item ${className}` : `il-item`}>
      <img src={data.img} alt="item" />
    </div>
  );
};

export default Item;
