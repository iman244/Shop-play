import "./inputSend1.css";
import React from "react";

const InputSend1 = ({ className, input_className, button_className }) => {
  return (
    <div className={className ? `il-inputSend ${className}` : "il-inputSend"}>
      <input
        className={input_className ? `il-input ${input_className}` : "il-input"}
        placeholder="subscribe to newsletter"
      />
      <button
        className={
          button_className ? `il-button ${button_className}` : "il-button"
        }
      >
        <ion-icon name="send"></ion-icon>
      </button>
    </div>
  );
};

export default InputSend1;
