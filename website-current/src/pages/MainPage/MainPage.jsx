import { React } from "react";

import NavBar from "../../components/NavBar/NavBar.jsx";
import IntroPanel from "../../components/MainPage/IntroPanel/IntroPanel.jsx";
import InvolvementPanel from "../../components/MainPage/InvolvementPanel/InvolvementPanel.jsx";
import SubHeader from "../../components/MainPage/SubHeader/SubHeader.jsx";
import ProjectPanel from "../../components/MainPage/ProjectPanel/ProjectPanel.jsx";

import { Involvements, Projects } from "./MainPageUtils.jsx";
import styles from "./MainPage.module.css";

const MainPage = () => {
  return (
    <div>
      <NavBar />
      <section>
        <IntroPanel />
      </section>

      <section>
        <div className={styles.involvements}>
          <SubHeader name={"involvements"} />
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
      </section>

      <section>
        <div className={styles.projects}>
          <SubHeader name={"projects"} />
          {Projects.map((project, index) => (
            <ProjectPanel key={index} name={project.name} desc={project.desc} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default MainPage;
