import React from "react";

const RadioPicker = ({ className, valueLabel, value, setValue }) => {
  return (
    <div
      className={
        className
          ? `${className} flex items-center gap-4`
          : "flex items-center gap-4"
      }
    >
      <p className="capitalize font-semibold" style={{ color: `${value}` }}>
        {valueLabel}
      </p>
      <div
        className={`h-3 w-3 flex items-center justify-center cursor-pointer rounded-full outline outline-offset-1 outline-4 outline-black ${
          value === "black" && "bg-black"
        }`}
        onClick={() => {
          setValue("black");
        }}
      ></div>
      <div
        className={`h-3 w-3 flex items-center justify-center cursor-pointer rounded-full outline outline-offset-1 outline-4 outline-blue-600 ${
          value === "blue" && "bg-blue-600"
        }`}
        onClick={() => {
          setValue("blue");
        }}
      ></div>
      <div
        className={`h-3 w-3 flex items-center justify-center cursor-pointer rounded-full outline outline-offset-1 outline-4 outline-red-600 ${
          value === "red" && "bg-red-600"
        }`}
        onClick={() => {
          setValue("red");
        }}
      ></div>
    </div>
  );
};

export default RadioPicker;
