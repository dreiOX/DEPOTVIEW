import React from "react";
import Menu from "./Menu/Menu";

function Layout({ children }) {
  return (
    <div>
      <Menu />
      <div>{children}</div>
    </div>
  );
}

export default Layout;
