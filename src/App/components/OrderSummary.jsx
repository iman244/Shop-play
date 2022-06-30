import React from "react";

const OrderSummary = ({ className, style }) => {
  return (
    <div
      className={className ? `${className} order-summary` : "order-summary"}
      style={style}
    >
      <h4 className="text-center uppercase font-bold">order summary</h4>
      <div>
        <div>
          <span>subtotal</span>
          <span>$ xxx</span>
        </div>
        <div>
          <span>estimated shipping</span>
          <span>+ $ x</span>
        </div>
        <div>
          <span>shipping discount</span>
          <span>- $ x</span>
        </div>
        <div className="font-bold text-lg">
          <span>total</span>
          <span>$ xxx</span>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
