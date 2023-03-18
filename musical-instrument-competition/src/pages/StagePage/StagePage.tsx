import { NavLink } from "react-router-dom";
import StageModel from "../../components/StageModel/StageModel";
import styles from "./StagePage.module.scss";

const StagePage = () => {
  return (
    <div className={styles.container}>
        <StageModel />
        <NavLink to="/" className={styles.backLink}>
        back
      </NavLink>
    </div>
  );
};

export default StagePage;
