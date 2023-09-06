import { React } from "react";
import { motion } from "framer-motion";

import { MainPageIntroduction } from "./IntroPanelUtils.jsx";
import Reveal, { item } from "../../common/Reveal/Reveal.jsx";

import picture from "../../../images/mainpage.jpg";
import GithubIcon from "../../../images/icons/GithubIcon.png";
import GithubIconBlack from "../../../images/icons/GithubIconBlack.png";
import LinkedinIcon from "../../../images/icons/LinkedinIcon.png";
import LinkedinIconBlack from "../../../images/icons/LinkedinIconBlack.png";
import ResumeIcon from "../../../images/icons/ResumeIcon.png";
import ResumeIconBlack from "../../../images/icons/ResumeIconBlack.png";
import Resume from "../../../documents/resume.pdf";

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
            <Reveal>
              <div className={styles.icons_wrapper}>
                <motion.div variants={item}>
                  <a
                    href="https://github.com/sravtall"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <img
                      className={styles.icons}
                      src={GithubIcon}
                      onMouseOver={(e) =>
                        (e.currentTarget.src = GithubIconBlack)
                      }
                      onMouseOut={(e) => (e.currentTarget.src = GithubIcon)}
                      alt="Github Icon"
                    />
                  </a>
                </motion.div>
                <motion.div variants={item}>
                  <a
                    href="https://www.linkedin.com/in/sravantallapaka/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <img
                      className={styles.icons}
                      src={LinkedinIcon}
                      onMouseOver={(e) =>
                        (e.currentTarget.src = LinkedinIconBlack)
                      }
                      onMouseOut={(e) => (e.currentTarget.src = LinkedinIcon)}
                      alt="Linkedin Icon"
                    />
                  </a>
                </motion.div>
                <motion.div variants={item}>
                  <a href={Resume} rel="noreferrer" target="_blank">
                    <img
                      className={styles.icons}
                      src={ResumeIcon}
                      onMouseOver={(e) =>
                        (e.currentTarget.src = ResumeIconBlack)
                      }
                      onMouseOut={(e) => (e.currentTarget.src = ResumeIcon)}
                      alt="Resume Icon"
                    />
                  </a>
                </motion.div>
              </div>
            </Reveal>
          </div>
        </motion.div>
      </div>
    </Reveal>
  );
};

export default IntroPanel;
