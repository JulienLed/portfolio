import styles from "./Button.module.css";

function Button() {
  return (
    <div className={styles.arrow}>
      <div className={styles.line1}></div>
      <div className={styles.line2}></div>
      <div className={styles.line3}></div>
      <div className={styles.line4}></div>
    </div>
  );
}

export default Button;
