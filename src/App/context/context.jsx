import React, { createContext } from "react";

export const userData = createContext();

const context = (props) => {
  return <userData.Provider>{props.children}</userData.Provider>;
};

export default context;
