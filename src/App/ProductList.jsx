import React from "react";
import List from "../components/mid-level/List/List";
import ShopFilters from "../components/mid-level/ShopFilters/ShopFilters";
import NewsLetter from "./components/NewsLetter";
import { popularProducts } from "./Data/data";

const ProductList = () => {
  return (
    <div className="flex flex-col gap-2">
      <ShopFilters />
      <List
        className="popularProdcutsContainer"
        comp_ClassName="popularProdcuts"
        component="CstCardproduct1"
        data={popularProducts}
      />

      <NewsLetter />
    </div>
  );
};

export default ProductList;
