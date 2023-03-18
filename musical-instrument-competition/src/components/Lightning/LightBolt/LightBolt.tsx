import styles from "./LightBolt.module.scss";

type LightBoltProps = {
    imgSrc: string
    leftSide: boolean
}

const LightBolt = ({imgSrc, leftSide}: LightBoltProps) => {
    return (
        <img src={imgSrc} className={leftSide ? styles.leftSide : styles.rightSide} />
    );
};

export default LightBolt;