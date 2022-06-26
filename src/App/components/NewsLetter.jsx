import "./newsLetter.css";
import React from "react";
import InputSend1 from "../../components/low-level/Input/InputSend1";

const NewsLetter = () => {
  return (
    <div className="newsLetter">
      <h6>newsletter</h6>
      <p>Get timely updates from your favorite products.</p>
      <InputSend1 className="inputSend1" />
    </div>
  );
};

export default NewsLetter;
