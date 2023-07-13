import { React } from "react";

import { MainPageIntroduction } from "./IntroPanelUtils.jsx";
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
        <p>{MainPageIntroduction}</p>
      </div>
    </div>
  );
};

export default IntroPanel;
