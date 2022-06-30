import "./shopFilters.css";
import React from "react";

const ShopFilters = () => {
  return (
    <div className="ShopFilters">
      <div className="wrapper flex justify-between">
        <div className="flex gap-5">
          <h4>filter products</h4>
          <select>
            <option disabled selected>
              color
            </option>
            <option value="white">white</option>
            <option value="black">black</option>
            <option value="red">red</option>
            <option value="blue">blue</option>
            <option value="yellow">yellow</option>
            <option value="green">green</option>
          </select>
          <select>
            <option disabled selected>
              size
            </option>
            <option value="xs">xs</option>
            <option value="sm">sm</option>
            <option value="m">m</option>
            <option value="lg">lg</option>
            <option value="xl">xl</option>
          </select>
        </div>
        <div className="flex gap-5">
          <h4>sort products</h4>
          <select name="" id="">
            <option disabled selected>
              newest
            </option>
            <option value="">price (asc)</option>
            <option value="">price (des)</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ShopFilters;
