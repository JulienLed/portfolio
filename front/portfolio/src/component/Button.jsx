import styles from "./Button.module.css";

export function ButtonScrollDown() {
  return (
    <div className={styles.arrow}>
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
      Next
    </div>
  );
}

export function ButtonSliderPrev(props) {
  const { onClick } = props;
  return (
    <div className={styles.arrowPrev} onClick={onClick}>
      Prev
    </div>
  );
}
