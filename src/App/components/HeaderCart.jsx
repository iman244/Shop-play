import React from "react";

const HeaderCart = ({ nOrders }) => {
  return (
    <div className="flex items-center">
      <button className="outline" style={{ flex: 1 }}>
        continue shoping
      </button>
      <p className="text-center uppercase" style={{ flex: 6 }}>
        number of orders ({nOrders})
      </p>
      <button className="simple" style={{ flex: 1 }}>
        checkout
      </button>
    </div>
  );
};

export default HeaderCart;
