import "./IconText.css";
import React from "react";

function IconText({ className, text_className, icon, text }) {
  return (
    <div className={className ? `il-iconText ${className}` : "il-iconText"}>
      {icon}
      {text && (
        <span className={text_className ? text_className : null}>{text}</span>
      )}
    </div>
  );
}

export default IconText;
