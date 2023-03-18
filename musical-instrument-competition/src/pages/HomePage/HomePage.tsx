import styles from "./HomePage.module.scss";
import { NavLink } from "react-router-dom";
import DemoButton from "../../components/DemoButtons/DemoButton";

import staticImg from "../../assets/images/tv/staticImage.gif";
import demoSound1 from "../../assets/sound/demo/demo1.mp3"
import demoSound2 from "../../assets/sound/demo/demo2.mp3"
import demoSound3 from "../../assets/sound/demo/demo3.mp3"

const HomePage = () => {
  return (
    <div className={styles.container}>
      <NavLink to="/play" className={styles.playLink}>
        Play
      </NavLink>

      <div className={styles.demoContainer}>
        <DemoButton label="demo1" sound={demoSound1} />
        <DemoButton label="demo2" sound={demoSound2} />
        <DemoButton label="demo3" sound={demoSound3} />
      </div>
      <img src={staticImg} className={styles.staticImg} />
    </div>
  );
};

export default HomePage;
