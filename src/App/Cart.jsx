import React from "react";
import HeaderCart from "./components/HeaderCart";
import List from "../components/mid-level/List/List";
import { orderProducts } from "./Data/data";
import OrderSummary from "./components/OrderSummary";

const Cart = () => {
  return (
    <div className="cart p-5 flex flex-col gap-6">
      <h3 className="text-center font-bold text-lg uppercase">your orders</h3>
      <HeaderCart nOrders={orderProducts.length} />
      <div className="ordered-products flex" style={{ flex: 1 }}>
        <div style={{ flex: 3 }}>
          <List
            className="ul-productCard"
            component={"ProductCard"}
            data={orderProducts}
          />
        </div>
        <OrderSummary
          className="border-2 rounded-lg p-4 h-fit border-blue-400"
          style={{ flex: 1 }}
        />
      </div>
    </div>
  );
};

export default Cart;
