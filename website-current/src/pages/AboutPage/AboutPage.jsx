import { React } from "react";

import NavBar from "../../components/NavBar/NavBar";
import InfoPanel from "../../components/AboutPage/InfoPanel/InfoPanel";

const AboutPage = () => {
  return (
    <div>
      <NavBar />
      <h1>About Page</h1>
      <InfoPanel />
    </div>
  );
};

export default AboutPage;
