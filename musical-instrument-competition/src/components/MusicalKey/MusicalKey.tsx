import styles from "./MusicalKey.module.scss";
import keyImage from "../../assets/images/models/keyImage.png";
import { useEffect, useState } from "react";
import useSound from "use-sound";

type MusicalKeyProps = {
  sound: string;
  keySymbol: string
  visualEffect: (active: boolean) => void;
}

const MusicalKey = ({sound, keySymbol, visualEffect }: MusicalKeyProps) => {

  const [keyPressed, setKeyPressed] = useState(false);
  const [play, { stop }] = useSound(sound, { volume: 0.2 });

  const handleKeyDown = (event: any) => {
    
    if (event.key === keySymbol && !keyPressed) {
      play();
      setKeyPressed(true);
      visualEffect(true)
    }
  };

  const handleKeyUp = (event: any) => {

    if (event.key === keySymbol) {
      setKeyPressed(false);
      stop(); 
      visualEffect(false)     
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, [keyPressed, []]);

  return (
    <div className={styles.container}>
      <button
        onKeyDown={(e) => handleKeyDown(e)}
        onKeyUp={(e) => handleKeyUp(e)}
        className={keyPressed ? styles.key : styles.keyActive}
      >
        <img src={keyImage} className={styles.image} />
        <label className={styles.keyLabel}>{keySymbol.toUpperCase()}</label>
      </button>
    </div>
  );
};

export default MusicalKey;
