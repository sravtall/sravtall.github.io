import { React } from "react";

import NavBar from "../../components/NavBar/NavBar.jsx";
import IntroPanel from "../../components/MainPage/IntroPanel/IntroPanel.jsx";
import InvolvementPanel from "../../components/MainPage/InvolvementPanel/InvolvementPanel.jsx";
import ProjectPanel from "../../components/MainPage/ProjectPanel/ProjectPanel.jsx";

const MainPage = () => {
  return (
    <div>
      <NavBar />
      <IntroPanel />
      <InvolvementPanel />
      <ProjectPanel />
    </div>
  );
};

export default MainPage;
