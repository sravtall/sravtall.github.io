import { React } from "react";

import picture from "../../../images/placeholder.jpeg";
import styles from "./IntroPanel.module.css";

const IntroPanel = () => {
  return (
    <div>
      <h3>welcome...</h3>
      <div>
        <img className={styles.intro_picture} src={picture} alt="pic" />
      </div>
      <div>
        <p>
          rbfjkk bvjkdf kjbvkdj kjbvkj kjvbkjf kfjvbfjvb kjfvbkjfvb kfjvbkfjvb
          kfjvbkfjvb kjvnfjvb
        </p>
      </div>
    </div>
  );
};

export default IntroPanel;
