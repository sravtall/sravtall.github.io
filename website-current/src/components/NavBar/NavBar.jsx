import { React } from "react";
import { Link } from "react-router-dom";

import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div>
      <div className={styles.navbar}>
        <Link className={styles.links} to="/">
          main
        </Link>
        <Link className={styles.links} to="/about">
          about
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
