import React from "react";

function Nav(props) {
  return (
    <nav className="text-center">
      {props.children}
    </nav>
  );
}

export default Nav;
