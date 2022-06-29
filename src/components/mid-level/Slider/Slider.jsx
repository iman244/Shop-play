import "./structure_slider.css";
import "./custom_slider.css";
import React, { useState } from "react";
import List from "../List/List";

function Slider({ className, comp_ClassName, slideComponent, data }) {
  const [firstOrder, setFirstOrder] = useState(0);
  const handleOrder = (direction) => {
    switch (direction) {
      case "left":
        let pointedIdLeft = firstOrder - 1;
        if (pointedIdLeft < 0) {
          setFirstOrder(data.length - 1);
        } else {
          setFirstOrder(pointedIdLeft);
        }

        break;
      case "right":
        let pointedIdRight = firstOrder + 1;
        if (pointedIdRight > data.length - 1) {
          setFirstOrder(0);
        } else {
          setFirstOrder(pointedIdRight);
        }
        break;
      default:
        throw new Error("neither left or right?");
    }
  };
  return (
    <div className={className ? `il-slider ${className}` : "il-slider"}>
      <i
        className="il-arrow left-0 ml-2 fa-solid fa-circle-left"
        onClick={() => {
          handleOrder("left");
        }}
      ></i>
      <i
        className="il-arrow right-0 mr-2 fa-solid fa-circle-right"
        onClick={() => {
          handleOrder("right");
        }}
      ></i>
      <List
        slide
        firstOrder={firstOrder}
        className="il-slides"
        comp_ClassName={`il-slide ${comp_ClassName}`}
        component={slideComponent}
        data={data}
      />
    </div>
  );
}

export default Slider;
