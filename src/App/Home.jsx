import "./home.css";
import React from "react";
import Navbar from "../components/high-level/Navbar3c/Navbar3c1";
import List from "../components/mid-level/List/List";
import Slider from "../components/mid-level/Slider/Slider";
import { categories, popularProducts, slides } from "./Data/data";
import NewsLetter from "./components/NewsLetter";
import Footer from "../components/high-level/Footer/Footer3c";

const Home = () => {
  return (
    <div>
      <Navbar />
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
      <Footer />
    </div>
  );
};

export default Home;
