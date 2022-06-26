import "./CstCardIdPB.css";
import React from "react";

const CstCardIdPB = ({
  className,
  img_className,
  dPB_className,
  p_className,
  button_className,
  img_src,
  img_alt,
  text_p,
  text_button,
}) => {
  return (
    <div
      className={
        className ? `il-CstCardIdPB ${img_className}` : "il-CstCardIdPB"
      }
    >
      <img
        className={img_className ? `il-img ${img_className}` : "il-img"}
        src={img_src}
        alt={img_alt}
      />
      <div className={dPB_className ? `il-dPB ${dPB_className}` : "il-dPB"}>
        <p className={p_className ? `il-title ${p_className}` : "il-title"}>
          {text_p}
        </p>
        <button
          className={
            button_className ? `il-button ${button_className}` : "il-button"
          }
        >
          {text_button}
        </button>
      </div>
    </div>
  );
};

export default CstCardIdPB;
