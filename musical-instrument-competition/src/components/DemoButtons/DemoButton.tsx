import styles from "./DemoButton.module.scss";
import useSound from "use-sound";
import { useState } from "react";

type DemoButtonPropes = {
  sound: string;
  label: string;
};

const DemoButton = ({ sound, label }: DemoButtonPropes) => {
  const [play, { stop }] = useSound(sound, { volume: 1 });
  const [playing, setPlaying] = useState(false);

  if (playing) {
    play();
  } else {
    stop();
  }

  return (
    <button className={styles.button} onClick={() => setPlaying(!playing)}>
      {label}
    </button>
  );
};

export default DemoButton;
