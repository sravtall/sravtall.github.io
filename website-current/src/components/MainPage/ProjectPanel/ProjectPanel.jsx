import { React } from "react";
import { motion } from "framer-motion";

import Reveal, { item } from "../../common/Reveal/Reveal.jsx";
import styles from "./ProjectPanel.module.css";

const ProjectPanel = ({ name, desc }) => {
  return (
    <Reveal>
      <div className={styles.container}>
        <motion.div className={styles.project_name} variants={item}>
          <h4>{name}</h4>
        </motion.div>
        <motion.div className={styles.project_desc} variants={item}>
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

export default ProjectPanel;
