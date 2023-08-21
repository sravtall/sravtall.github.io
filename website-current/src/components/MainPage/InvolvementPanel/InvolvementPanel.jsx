import { React } from "react";

import styles from "./InvolvementPanel.module.css";

const InvolvementPanel = ({ name, pos, time, desc }) => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.involvement_title}>
          <h4>{name}</h4>
        </div>
        <div className={styles.involvement_pos}>
          <h5>{pos}</h5>
        </div>
        <div className={styles.involvement_time}>
          <h6>{time}</h6>
        </div>
        <div className={styles.involvement_desc}>
          <ul>
            {desc.map((d, index) => (
              <li key={index}>{d}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InvolvementPanel;
