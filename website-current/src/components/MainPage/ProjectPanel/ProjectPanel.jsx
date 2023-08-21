import { React } from "react";

import styles from "./ProjectPanel.module.css";

const ProjectPanel = ({ name, desc }) => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.project_name}>
          <h4>{name}</h4>
        </div>
        <div className={styles.project_desc}>
          <ul>
            {desc?.map((d, index) => (
              <li key={index}>{d}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectPanel;
