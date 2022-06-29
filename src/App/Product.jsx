import React, { useState } from "react";
import OrderCounter from "../components/low-level/OrderCounter/OrderCounter";
import RadioPicker from "../components/low-level/RadioPicker/RadioPicker";
import { popularProducts } from "./Data/data";

const Product = (props) => {
  const [nOrder, setNOrder] = useState(0);
  const [color, setColor] = useState("black");

  let id = Number(props.match.params.id) - 1;
  let item = popularProducts[id];
  return (
    <div className="flex flex-col w-full sm:flex-row">
      <div className="h-[50vh] sm:h-fit object-contain" style={{ flex: "1" }}>
        <img src={item.img} alt="product" />
      </div>
      <div className="flex flex-col justify-center gap-7" style={{ flex: "1" }}>
        <div className="grid grid-cols-3 gap-y-2 gap-x-5 items-center">
          <h4 className="capitalize font-bold">{item.title}</h4>
          <span className="font-semibold">price {item.price}</span>
          <div className="flex items-center gap-2">
            <span className="whitespace-nowrap capitalize text-sm">
              place your order
            </span>
            <OrderCounter counter={nOrder} setCounter={setNOrder} />
          </div>
          <RadioPicker valueLabel="color" value={color} setValue={setColor} />
          <div className="flex items-center gap-2">
            <span className="capitalize">size</span>
            <select className="border-2 py-1 px-2">
              <option value="xs">xs</option>
              <option value="sm">sm</option>
              <option value="m">m</option>
              <option value="lg">lg</option>
              <option value="xl">xl</option>
            </select>
          </div>
        </div>
        <p>{item.desc}</p>
      </div>
    </div>
  );
};

export default Product;
