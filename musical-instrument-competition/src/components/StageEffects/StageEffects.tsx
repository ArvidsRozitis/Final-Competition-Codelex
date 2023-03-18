import styles from "./StageEffects.module.scss";
import { useAppSelector } from "../../store/hooks";
import lightsImg from "../../assets/images/effects/lights.png";

const StageEffects = () => {
  const leftLightningIsActive = useAppSelector((store) => {
    return store.stageLightning.leftLightning;
  });

  const righLightningIsActive = useAppSelector((store) => {
    return store.stageLightning.rightLightning;
  });

  if (righLightningIsActive || leftLightningIsActive) {
    return (
      <>
        <div className={styles.lightenStage}></div>
        <img src={lightsImg} className={styles.lightsImage} />
      </>
    );
  }

  return (
    <>
      <div className={styles.darkenStage}></div>
      <img src={lightsImg} className={styles.lightsImage} />
    </>
  );
};

export default StageEffects;
