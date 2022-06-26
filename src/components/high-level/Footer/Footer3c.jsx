import "./custom_Footbar3c.css";
import "./structure_Footbar3c.css";
import React from "react";
import List from "../../mid-level/List/List";
import {
  contactItems,
  socialMediaIcons,
  usefulLinks,
} from "../../../App/Data/Footer";

const Footer = () => {
  return (
    <div className="Footer3c">
      <div className="wrapper structure-3column">
        <div className="column-1">
          <h2>shop play</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
          </p>
          <List
            className="socialIcons"
            comp_ClassName="socialIcon"
            component="Icon"
            data={socialMediaIcons}
          />
        </div>
        <div className="column-2">
          <h3>useful links</h3>
          <List component={"text"} data={usefulLinks} />
        </div>
        <div className="column-3">
          <h3>contact</h3>
          <List component={"IconText"} data={contactItems} />
          <img
            src="https://i.ibb.co/Qfvn4z6/payment.png"
            alt="payment methods"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
