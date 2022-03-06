import React from "react";
import "../homePage/home.css";
const Layout = (props) => {
  return <div className="containerFluid">{props.children}</div>;
};

export default Layout;
