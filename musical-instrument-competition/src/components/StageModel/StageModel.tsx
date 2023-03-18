import styles from "./StageModel.module.scss";
import SoundKeyBoard from "../KeyBoard/SoundKeyBoard/SoundKeyBoard";
import DrumKeyBoard from "../KeyBoard/DrumKeyBoard/DrumKeyBoard";
import TrackKeyBoard from "../KeyBoard/TrackKeyBoard/TrackKeyBoard";
import Lightning from "../Lightning/Lightning/Lightning";
import SpeakersMotel from "../SpeakersModel/SpeakersMotel";
import StageEffects from "../StageEffects/StageEffects";

import stageImage from "../../assets/images/models/stage.png";
import barriersImage from "../../assets/images/models/barriers.png";
import Walle from "../Walle/Walle";

const StageModel = () => {
  
  return (
    <div className={styles.container}>
      <img src={stageImage} className={styles.stageImage} />
      <Walle />
      <SpeakersMotel />
      <img src={barriersImage} className={styles.barriersImage} />
      <Lightning />
      <SoundKeyBoard />
      <DrumKeyBoard />
      <TrackKeyBoard />
      <StageEffects />
      
    </div>
  );
};

export default StageModel;
