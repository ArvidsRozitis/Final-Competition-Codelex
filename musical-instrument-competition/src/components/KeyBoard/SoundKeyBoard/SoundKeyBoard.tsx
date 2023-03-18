import styles from "./SoundKeyBoard.module.scss";
import MusicalKey from "../../MusicalKey/MusicalKey";
import { useAppDispatch } from "../../../store/hooks";
import { setLeftLightningIsActive ,setRightLightningIsActive } from "../../../slices/stageLightningSlice";
import { setLeftHandUp, setRightHandUp} from "../../../slices/walleSlice"

import noteOne from "../../../assets/sound/notes/Ab.wav";
import noteTwo from "../../../assets/sound/notes/d.wav";
import noteThree from "../../../assets/sound/notes/f.wav";
import noteFour from "../../../assets/sound/notes/g.wav";

const SoundKeyBoard = () => {
  const dispatch = useAppDispatch();

  const handleLeftSide = (active: boolean) => {
    dispatch(setLeftLightningIsActive(active));
    dispatch(setLeftHandUp(active));
  };

  const handleRightSide = (active: boolean) => {
    dispatch(setRightLightningIsActive(active));
    dispatch(setRightHandUp(active))
  };

  return (
    <div className={styles.container}>
      <MusicalKey
        sound={noteOne}
        keySymbol={"a"}
        visualEffect={(active: boolean) => handleLeftSide(active)}
      />
      <MusicalKey
        sound={noteTwo}
        keySymbol={"s"}
        visualEffect={(active: boolean) => handleLeftSide(active)}
      />
      <MusicalKey
        sound={noteThree}
        keySymbol={"d"}
        visualEffect={(active: boolean) => handleRightSide(active)}
      />
      <MusicalKey
        sound={noteFour}
        keySymbol={"f"}
        visualEffect={(active: boolean) => handleRightSide(active)}
      />
    </div>
  );
};

export default SoundKeyBoard;
