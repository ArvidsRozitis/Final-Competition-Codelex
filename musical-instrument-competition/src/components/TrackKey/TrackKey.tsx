import styles from "./TrackKey.module.scss";
import keyImage from "../../assets/images/models/keyImage.png";
import { useEffect, useRef, useState } from "react";
import useSound from "use-sound";

type TrackKeyProps = {
  sound: string;
  keySymbol: string;
};

const TrackKey = ({ sound, keySymbol }: TrackKeyProps) => {
  const [isRunning, setIsRunning] = useState(false);
  const [keyPressed, setKeyPressed] = useState(false);
  const [play, { stop }] = useSound(sound, { volume: 2 });

  useInterval(
    () => {
      if (keyPressed) {
        play();
      }
    },
    isRunning ? 2000 : null
  );

  const handleKeyPress = (event: any) => {
    if (event.key === keySymbol) {
      setKeyPressed(!keyPressed);
      setIsRunning(!isRunning);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [keyPressed, []]);

  return (
    <div className={styles.container}>
      <button
        onKeyDown={(e) => handleKeyPress(e)}
        className={keyPressed ? styles.key : styles.keyActive}
      >
        <img src={keyImage} className={styles.image} />
        <label className={styles.keyLabel}>{keySymbol.toUpperCase()}</label>
      </button>
    </div>
  );
};

export default TrackKey;

const useInterval = (callback: () => void, delay: number | null): void => {
  const savedCallback = useRef<(() => void) | undefined>();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current?.();
    }

    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};
