import "./structure_navbar3c.css";
import "./custom_navbar3c.css";
import React from "react";
import Search from "../../low-level/Search/Search";
import Icon from "../../low-level/Icon/Icon";

const Navbar = () => {
  return (
    <nav className="nav-3column">
      <div className="wrapper">
        <div className="column-1">
          <Search placeholder="Search..." iconEnd />
        </div>
        <div className="column-2">shop play</div>
        <div className="column-3">
          <button>sign up</button>
          <button>sign in</button>
          <Icon
            icon={<i className="fa-solid fa-cart-shopping"></i>}
            badge={2}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
