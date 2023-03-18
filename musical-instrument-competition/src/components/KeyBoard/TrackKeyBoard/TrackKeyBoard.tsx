import styles from "./TrackKeyBoard.module.scss";
import drums from "../../../assets/sound/tracks/drums.wav";
import discoBass from "../../../assets/sound/tracks/discoBass.wav";
import TrackKey from "../../TrackKey/TrackKey";

const TrackKeyBoard = () => {
  return (
    <div className={styles.container}>
      <TrackKey sound={drums} keySymbol={"+"} />
      <TrackKey sound={discoBass} keySymbol={"-"} />
    </div>
  );
};

export default TrackKeyBoard;
