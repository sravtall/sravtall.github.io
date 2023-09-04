import { React } from "react";

import styles from "./SubHeader.module.css";

const SubHeader = ({ name }) => {
  return (
    <div>
      <div style={styles.container}>
        <h1>{name}</h1>
      </div>
    </div>
  );
};

export default SubHeader;
