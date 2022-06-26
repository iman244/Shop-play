import "./CstCardproduct1.css";
import React from "react";
import List from "../../mid-level/List/List";

const CstCardproduct1 = ({ className, img_className, img_src, img_alt }) => {
  const icons = [
    {
      id: 1,
      icon: "fa-solid fa-cart-plus",
    },
    {
      id: 2,
      icon: "fa-solid fa-magnifying-glass-plus",
    },
    {
      id: 3,
      icon: "fa-solid fa-heart",
    },
  ];
  return (
    <div
      className={
        className ? `il-CstCardproduct1 ${className}` : "il-CstCardproduct1"
      }
    >
      <div className="circle"></div>
      <img
        className={img_className ? `il-img ${img_className}` : "il-img"}
        src={img_src}
        alt={img_alt}
      />
      <List
        className="coverIcons"
        comp_ClassName="icon"
        component="Icon"
        data={icons}
      />
    </div>
  );
};

export default CstCardproduct1;
