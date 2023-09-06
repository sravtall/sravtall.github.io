import { React } from "react";

import NavBar from "../../components/NavBar/NavBar";
import SubHeader from "../../components/MainPage/SubHeader/SubHeader";
import InfoPanel from "../../components/AboutPage/InfoPanel/InfoPanel";
import WishlistPanel from "../../components/AboutPage/WishlistPanel/WishlistPanel";
import SocialsPanel from "../../components/AboutPage/SocialsPanel/SocialsPanel";

import styles from "./AboutPage.module.css";
import { Wishlist } from "./AboutPageUtils";

const AboutPage = () => {
  return (
    <div>
      <NavBar />

      <section>
        <InfoPanel />
      </section>

      <section>
        <div className={styles.wishlist_section}>
          <SubHeader name="buy me these." />
          <WishlistPanel items={Wishlist.items} />
        </div>
      </section>

      <section>
        <div className={styles.socials_section}>
          <SubHeader name="follow me." />
          <SocialsPanel />
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
