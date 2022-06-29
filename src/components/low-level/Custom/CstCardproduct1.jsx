import "./CstCardproduct1.css";
import React from "react";
import List from "../../mid-level/List/List";
import { Link } from "react-router-dom";

const CstCardproduct1 = ({
  className,
  id,
  img_className,
  img_src,
  img_alt,
}) => {
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
    <Link
      to={`/product/${id}`}
      className={
        className ? `il-CstCardproduct1 ${className}` : "il-CstCardproduct1"
      }
      onClick={(event) => {
        console.log(event.target);
      }}
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
    </Link>
  );
};

export default CstCardproduct1;
