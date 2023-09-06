import { React } from "react";
import { motion } from "framer-motion";

import Reveal, { item } from "../../common/Reveal/Reveal.jsx";

import InstagramIcon from "../../../images/icons/InstagramIcon.png";
import InstagramIconBlack from "../../../images/icons/InstagramIconBlack.png";
import FacebookIcon from "../../../images/icons/FacebookIcon.png";
import FacebookIconBlack from "../../../images/icons/FacebookIconBlack.png";
import SpotifyIcon from "../../../images/icons/SpotifyIcon.png";
import SpotifyIconBlack from "../../../images/icons/SpotifyIconBlack.png";

import styles from "./SocialsPanel.module.css";

const SocialsPanel = () => {
  return (
    <Reveal>
      <div className={styles.container}>
        <motion.div variants={item}>
          <a
            href="https://www.instagram.com/sravtall/"
            rel="noreferrer"
            target="_blank"
          >
            <img
              className={styles.icons}
              src={InstagramIcon}
              onMouseOver={(e) => (e.currentTarget.src = InstagramIconBlack)}
              onMouseOut={(e) => (e.currentTarget.src = InstagramIcon)}
              alt="Instagram Icon"
            />
          </a>
        </motion.div>
        <motion.div variants={item}>
          <a
            href="https://www.facebook.com/sravan.tallapaka"
            rel="noreferrer"
            target="_blank"
          >
            <img
              className={styles.icons}
              src={FacebookIcon}
              onMouseOver={(e) => (e.currentTarget.src = FacebookIconBlack)}
              onMouseOut={(e) => (e.currentTarget.src = FacebookIcon)}
              alt="Facebook Icon"
            />
          </a>
        </motion.div>
        <motion.div variants={item}>
          <a
            href="https://open.spotify.com/user/therealsratlord?si=42c31b2ff26b471e"
            rel="noreferrer"
            target="_blank"
          >
            <img
              className={styles.icons}
              src={SpotifyIcon}
              onMouseOver={(e) => (e.currentTarget.src = SpotifyIconBlack)}
              onMouseOut={(e) => (e.currentTarget.src = SpotifyIcon)}
              alt="Spotify Icon"
            />
          </a>
        </motion.div>
      </div>
    </Reveal>
  );
};

export default SocialsPanel;
