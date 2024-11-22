import wave1 from "../../../assets/images/wave1.png";
import wave2 from "../../../assets/images/wave2.png";

import styles from "./Wave.module.css";

const Wave = ({ reversed }) => {
  const direction = reversed;

  const wave = (
    <div className={styles.wave}>
      <img src={wave1} alt="" className={styles.wave_image} />
      <img src={wave2} alt="" className={styles.wave_image2} />
    </div>
  );

  const reversed_wave = (
    <div className={styles.reversed_wave}>
      <img src={wave1} alt="" className={styles.wave_image} />
      <img src={wave2} alt="" className={styles.wave_image2} />
    </div>
  );

  return <div>{direction ? reversed_wave : wave}</div>;
};

export default Wave;
