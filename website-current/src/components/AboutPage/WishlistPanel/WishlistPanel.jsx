import { React } from "react";
import { motion } from "framer-motion";

import Reveal, { item } from "../../common/Reveal/Reveal.jsx";
import styles from "./WishlistPanel.module.css";

const WishlistPanel = ({ items }) => {
  return (
    <Reveal>
      <div className={styles.container}>
        <motion.div className={styles.wishlist_filler} variants={item}>
          <h5>weird things that interest me</h5>
        </motion.div>
        <motion.div className={styles.wishlist_items} variants={item}>
          <ul>
            {items?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </motion.div>
      </div>
    </Reveal>
  );
};

export default WishlistPanel;
