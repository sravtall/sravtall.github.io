import { React } from "react";

import { Link } from "react-router-dom";

import "./NavBar.module.css";

const NavBar = () => {
  return (
    <div>
      <h3>Nav Bar</h3>
      <div>
        <Link to="/">main</Link>
        <Link to="/about">about</Link>
      </div>
    </div>
  );
};

export default NavBar;
