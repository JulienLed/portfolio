import { useState, useEffect } from "react";
import styles from "./Banner.module.css";
import photo from "../assets/Photo Ju.png";

function Banner() {
  return (
    <div className={styles.banner}>
      <h1 className={styles}>Julien, Developpeur Web</h1>
      <div className={styles.line3WordsContainer}>
        <div className={styles.line}></div>
        <div className={styles.descript3Words}>
          <p className={styles.p1}>Ecouter</p>
          <p className={styles.p2}>Accompagner</p>
          <p className={styles.p3}>Concevoir</p>
        </div>
      </div>
      <div className={styles.quoteImageContener}>
        <div className={styles.devAs}>
          <p className={styles.bgp}>« Allier impact social</p>
          <p className={styles.bgp}>& performance web »</p>
        </div>
        <img className={styles.photo} src={photo}></img>
        <div className={styles.img_blur}></div>
      </div>
    </div>
  );
}

export default Banner;
