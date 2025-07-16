import styles from "./Button.module.css";
import arrow from "../assets/arrow.png";
import { useRef } from "react";

export function ButtonScrollDown({ handleClick }) {
  return (
    <div onClick={handleClick} className={styles.arrow}>
      <div className={styles.line1}></div>
      <div className={styles.line2}></div>
      <div className={styles.line3}></div>
      <div className={styles.line4}></div>
    </div>
  );
}

export function ButtonSliderNext(props) {
  const { onClick } = props;
  return (
    <div className={styles.arrowNext} onClick={onClick}>
      <img src={arrow}></img>
    </div>
  );
}

export function ButtonSliderPrev(props) {
  const { onClick } = props;
  return (
    <div className={styles.arrowPrev} onClick={onClick}>
      <img src={arrow}></img>
    </div>
  );
}
