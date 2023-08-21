import { React } from "react";

import NavBar from "../../components/NavBar/NavBar.jsx";
import IntroPanel from "../../components/MainPage/IntroPanel/IntroPanel.jsx";
import InvolvementPanel from "../../components/MainPage/InvolvementPanel/InvolvementPanel.jsx";
import ProjectPanel from "../../components/MainPage/ProjectPanel/ProjectPanel.jsx";

import { Involvements, Projects } from "./MainPageUtils.jsx";
import styles from "./MainPage.module.css";

const MainPage = () => {
  return (
    <div>
      <NavBar />
      <IntroPanel />
      <div className={styles.involvements}>
        {Involvements.map((involvement, index) => (
          <InvolvementPanel
            key={index}
            name={involvement.name}
            pos={involvement.pos}
            time={involvement.time}
            desc={involvement.desc}
          />
        ))}
      </div>
      <div className={styles.projects}>
        {Projects.map((project, index) => (
          <ProjectPanel key={index} name={project.name} desc={project.desc} />
        ))}
      </div>
    </div>
  );
};

export default MainPage;
