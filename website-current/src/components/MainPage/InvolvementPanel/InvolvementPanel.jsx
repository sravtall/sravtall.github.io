import { React } from "react";
import { motion } from "framer-motion";

import Reveal, { item } from "../../common/Reveal/Reveal.jsx";
import styles from "./InvolvementPanel.module.css";

const InvolvementPanel = ({ name, pos, time, desc }) => {
  return (
    <Reveal>
      <div className={styles.container}>
        <motion.div className={styles.involvement_title} variants={item}>
          <h4>{name}</h4>
        </motion.div>
        <motion.div className={styles.involvement_pos} variants={item}>
          <h5>{pos}</h5>
        </motion.div>
        <motion.div className={styles.involvement_time} variants={item}>
          <h6>{time}</h6>
        </motion.div>
        <motion.div className={styles.involvement_desc} variants={item}>
          <ul>
            {desc?.map((d, index) => (
              <li key={index}>{d}</li>
            ))}
          </ul>
        </motion.div>
      </div>
    </Reveal>
  );
};

export default InvolvementPanel;
