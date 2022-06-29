import "./orderCounter.css";
import React from "react";

const OrderCounter = ({ className, counter, setCounter }) => {
  return (
    <div className="h-11 w-24 flex items-center justify-center">
      {!counter ? (
        <i
          className="fa-solid fa-cart-plus hover:text-blue-600 cursor-pointer text-lg"
          onClick={() => {
            setCounter(1);
          }}
        ></i>
      ) : (
        <div className={className ? `${className} il-counter` : "il-counter"}>
          {counter > 1 ? (
            <i
              className="fa-solid fa-minus"
              onClick={() => {
                setCounter(counter - 1);
              }}
            ></i>
          ) : (
            <i
              className="fa-solid fa-trash-can"
              onClick={() => {
                setCounter(0);
              }}
            ></i>
          )}
          <span>{counter}</span>
          <i
            className="fa-solid fa-plus"
            onClick={() => {
              setCounter(counter + 1);
            }}
          ></i>
        </div>
      )}
    </div>
  );
};

export default OrderCounter;

// {!counter ? (
//     <i
//       className="fa-solid fa-cart-plus hover:text-blue-600 cursor-pointer text-lg"
//       onClick={() => {
//         setCounter(1);
//       }}
//     ></i>
//   ) : (
//     <div>
//       {counter > 1 ? (
//         <i
//           className="fa-solid fa-minus"
//           onClick={() => {
//             setCounter(counter - 1);
//           }}
//         ></i>
//       ) : (
//         <i
//           className="fa-solid fa-trash-can"
//           onClick={() => {
//             setCounter(0);
//           }}
//         ></i>
//       )}
//       <span>{counter}</span>
//       <i
//         className="fa-regular fa-plus"
//         onClick={() => {
//           setCounter(counter + 1);
//         }}
//       ></i>
//     </div>
//   )}
