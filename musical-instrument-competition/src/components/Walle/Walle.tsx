import styles from "./Walle.module.scss";
import { useAppSelector } from "../../store/hooks";

import walleImage from "../../assets/images/walleImages/walleNoHands.png";
import walleImageLHD from "../../assets/images/walleImages/walleLeftHandDown.png";
import walleImageRHD from "../../assets/images/walleImages/walleRightHandDown.png";
import walleImageLHU from "../../assets/images/walleImages/walleLeftHandUp.png";
import walleImageRHU from "../../assets/images/walleImages/walleRightHandUp.png";

const Walle = () => {

  const lefthHandIsUp = useAppSelector((store) => {
    return store.walleDance.leftHandUp;
  });

  const rigthHandIsUp = useAppSelector((store) => {
    return store.walleDance.rightHandUp;
  });

  return (
    <div>
      <img src={walleImage} className={styles.walleNoHands} />
      {!lefthHandIsUp && (
        <img src={walleImageLHD} className={styles.walleLeftHandDown} />
      )}
      {!rigthHandIsUp && (
        <img src={walleImageRHD} className={styles.walleRightHandDown} />
      )}
      {lefthHandIsUp && (
        <img src={walleImageLHU} className={styles.walleLeftHandUp} />
      )}
      {rigthHandIsUp && (
        <img src={walleImageRHU} className={styles.walleRightHandUp} />
      )}
    </div>
  );
};

export default Walle;
