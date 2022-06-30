import React, { useState } from "react";
import OrderCounter from "../../low-level/OrderCounter/OrderCounter";
import RadioPicker from "../../low-level/RadioPicker/RadioPicker";

const ProductCard = ({ data }) => {
  const [nOrder, setNOrder] = useState(0);
  const [color, setColor] = useState("black");

  return (
    <div className="flex">
      <div className="flex gap-5" style={{ flex: 1 }}>
        <img className="w-52" src={data.img} alt="product" />
        <div className="flex flex-col justify-center gap-3">
          <div className="flex">
            <span className="font-bold capitalize" style={{ flex: 1 }}>
              name:
            </span>
            <span style={{ flex: 1 }}>{data.name}</span>
          </div>
          <div className="flex">
            <span className="font-bold capitalize" style={{ flex: 1 }}>
              id:
            </span>
            <span style={{ flex: 1 }}>{data.id}</span>
          </div>
          <RadioPicker valueLabel="color" value={color} setValue={setColor} />
          <div className="flex">
            <span className="font-bold capitalize" style={{ flex: 1 }}>
              size:
            </span>
            <span style={{ flex: 1 }}>{data.size}</span>
          </div>
        </div>
      </div>
      <div
        className="flex flex-col justify-center gap-4 items-center"
        style={{ flex: 0.8 }}
      >
        <OrderCounter counter={nOrder} setCounter={setNOrder} />
        <span>price: $ {data.price}</span>
      </div>
    </div>
  );
};

export default ProductCard;
