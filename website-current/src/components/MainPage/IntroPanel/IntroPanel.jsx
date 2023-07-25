import { React } from "react";

import { MainPageIntroduction } from "./IntroPanelUtils.jsx";
import picture from "../../../images/placeholder.jpeg";
import styles from "./IntroPanel.module.css";

const IntroPanel = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.left_panel}>
          <div className={styles.welcome_text_wrapper}>
            <h3 className={styles.welcome_text}>welcome...</h3>
          </div>
          <div className={styles.intro_picture_wrapper}>
            <img className={styles.intro_picture} src={picture} alt="pic" />
          </div>
        </div>
        <div className={styles.right_panel}>
          <div className={styles.introduction_wrapper}>
            <p className={styles.introduction}>{MainPageIntroduction}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroPanel;
