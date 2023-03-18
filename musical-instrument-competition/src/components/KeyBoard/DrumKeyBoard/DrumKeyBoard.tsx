import styles from "./DrumKeyBoard.module.scss";
import { useAppDispatch } from "../../../store/hooks";
import { setSpeakerMove } from "../../../slices/speakersSlice";

import kick from "../../../assets/sound/notes/kick.wav";
import hat from "../../../assets/sound/notes/hat.wav";
import slap from "../../../assets/sound/notes/slap.wav";
import MusicalKey from "../../MusicalKey/MusicalKey";

const DrumKeyBoard = () => {
  const dispatch = useAppDispatch();

  const handleSpeakerMove = (active: boolean) => {
    dispatch(setSpeakerMove(active));
  };

  return (
    <div className={styles.container}>
      <MusicalKey
        sound={kick}
        keySymbol={"j"}
        visualEffect={(active: boolean) => handleSpeakerMove(active)}
      />
      <MusicalKey
        sound={hat}
        keySymbol={"k"}
        visualEffect={(active: boolean) => handleSpeakerMove(active)}
      />
      <MusicalKey
        sound={hat}
        keySymbol={"l"}
        visualEffect={(active: boolean) => handleSpeakerMove(active)}
      />
      <MusicalKey
        sound={slap}
        keySymbol={";"}
        visualEffect={(active: boolean) => handleSpeakerMove(active)}
      />
    </div>
  );
};

export default DrumKeyBoard;
