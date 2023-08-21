import { React } from "react";

import NavBar from "../../components/NavBar/NavBar.jsx";
import IntroPanel from "../../components/MainPage/IntroPanel/IntroPanel.jsx";
import InvolvementPanel from "../../components/MainPage/InvolvementPanel/InvolvementPanel.jsx";
import ProjectPanel from "../../components/MainPage/ProjectPanel/ProjectPanel.jsx";

import { Info } from "./MainPageUtils.jsx";
import styles from "./MainPage.module.css";

const MainPage = () => {
  return (
    <div>
      <NavBar />
      <IntroPanel />
      <div className={styles.involvements}>
        {Info.map((involvement, index) => (
          <InvolvementPanel
            key={index}
            name={involvement.name}
            pos={involvement.pos}
            time={involvement.time}
            desc={involvement.desc}
          />
        ))}
      </div>
      <ProjectPanel />
    </div>
  );
};

export default MainPage;
