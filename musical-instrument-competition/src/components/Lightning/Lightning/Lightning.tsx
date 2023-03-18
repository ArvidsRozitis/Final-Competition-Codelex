import styles from "./Lightning.module.scss";
import { useAppSelector } from "../../../store/hooks";
import LightBolt from "../LightBolt/LightBolt";

import lightningOne from "../../../assets/images/lightning/lightning.gif";

const Lightning = () => {

  const leftLightningIsActive = useAppSelector((store) => {
    return store.stageLightning.leftLightning;
  });

  const rightLightningIsActive = useAppSelector((store) => {
    return store.stageLightning.rightLightning;
  });

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {leftLightningIsActive && (
          <LightBolt imgSrc={lightningOne} leftSide={true} />
        )}
        {rightLightningIsActive && (
          <LightBolt imgSrc={lightningOne} leftSide={false} />
        )}
      </div>
    </div>
  );
};

export default Lightning;
