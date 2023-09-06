import { React } from "react";
import { motion } from "framer-motion";

import Reveal, { item } from "../../common/Reveal/Reveal.jsx";

import { Info } from "./InfoPanelUtils.jsx";
import picture from "../../../images/aboutpage.jpg";
import styles from "./InfoPanel.module.css";

const InfoPanel = () => {
  return (
    <Reveal>
      <div className={styles.container}>
        <motion.div className={styles.title_text_wrapper} variants={item}>
          <h3 className={styles.title_text}>hi...</h3>
        </motion.div>
        <motion.div className={styles.left_panel} variants={item}>
          <div className={styles.left_picture_wrapper}>
            <img className={styles.left_picture} src={picture} alt="pic" />
          </div>
        </motion.div>
        <motion.div className={styles.right_panel} variants={item}>
          <div className={styles.about_wrapper}>
            <p className={styles.about}>{Info}</p>
          </div>
        </motion.div>
      </div>
    </Reveal>
  );
};

export default InfoPanel;
