import styles from "./Banner.module.css";
import photo from "../assets/Photo Ju.png";

function Banner() {
  return (
    <>
      <h1 className={styles}>Julien, Developpeur Web</h1>
      <div className={styles.line3WordsContainer}>
        <div className={styles.line}></div>
        <div className={styles.descript3Words}>
          <p className={styles.p1}>Ecouter</p>
          <p className={styles.p2}>Accompagner</p>
          <p className={styles.p3}>Concevoir</p>
        </div>
      </div>
      <img className={styles.photo} src={photo}></img>
    </>
  );
}

export default Banner;
