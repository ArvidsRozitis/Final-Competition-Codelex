import styles from "./SpeakersMotel.module.scss";
import { useAppSelector } from "../../store/hooks";
import speakersImage from "../../assets/images/models/speakers.png";

const SpeakersMotel = () => {
  const speakersIsMoving = useAppSelector((store) => {
    return store.stageSpeakers.isMoving;
  });
  return (
    <img
      src={speakersImage}
      className={
        speakersIsMoving ? styles.speakersImageActive : styles.speakersImage
      }
    />
  );
};

export default SpeakersMotel;
