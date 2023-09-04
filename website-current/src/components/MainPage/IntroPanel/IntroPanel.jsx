import { React } from "react";
import { motion } from "framer-motion";

import { MainPageIntroduction } from "./IntroPanelUtils.jsx";
import Reveal, { item } from "../../common/Reveal/Reveal.jsx";
import picture from "../../../images/placeholder.jpeg";
import styles from "./IntroPanel.module.css";

const IntroPanel = () => {
  return (
    <Reveal>
      <div className={styles.container}>
        <motion.div className={styles.welcome_text_wrapper} variants={item}>
          <h3 className={styles.welcome_text}>welcome...</h3>
        </motion.div>
        <motion.div className={styles.left_panel} variants={item}>
          <div className={styles.intro_picture_wrapper}>
            <img className={styles.intro_picture} src={picture} alt="pic" />
          </div>
        </motion.div>
        <motion.div className={styles.right_panel} variants={item}>
          <div className={styles.introduction_wrapper}>
            <p className={styles.introduction}>{MainPageIntroduction}</p>
          </div>
        </motion.div>
      </div>
    </Reveal>
  );
};

export default IntroPanel;
