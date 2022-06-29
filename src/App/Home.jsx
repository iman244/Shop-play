import "./home.css";
import "./register.css";
import React from "react";
import List from "../components/mid-level/List/List";
import Slider from "../components/mid-level/Slider/Slider";
import { categories, popularProducts, slides } from "./Data/data";
import NewsLetter from "./components/NewsLetter";

const Home = () => {
  return (
    <div className="flex flex-col gap-2">
      <Slider
        comp_ClassName="bg-blue-100"
        slideComponent="Item"
        data={slides}
      />
      <p className="text-center uppercase font-bold text-2xl mt-14 mb-5 text-blue-500">
        Categories
      </p>
      <List className="categories" component="CstCardIdPB" data={categories} />
      <p className="text-center capitalize font-bold text-2xl mt-14 mb-5 text-blue-500">
        popular products
      </p>
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

export default Home;
