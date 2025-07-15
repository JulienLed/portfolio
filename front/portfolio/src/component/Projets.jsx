import { useState, useEffect, useRef } from "react";
import styles from "./Projets.module.css";
import videoSrc from "../assets/Web App AS.mp4";

function Projets() {
  const [opacity, setOpacity] = useState(1);
  const videoRef = useRef(null);

  //Lancer à vidéo à 6 secondes
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.currentTime = 6;
      video.play();
    }
  }, []);

  // Afficher progressivement quand on scroll
  useEffect(() => {
    const handleScroll = () => {
      const elementHeight = window.innerHeight;
      const scrollTop = window.scrollY;

      let newOpacity = scrollTop / elementHeight;
      newOpacity = Math.max(0, Math.min(1, newOpacity));

      setOpacity(newOpacity);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ opacity }}>
      <h3>Projets</h3>
      <div className={styles.projets1}>
        <video ref={videoRef} autoPlay muted loop>
          <source src={videoSrc} type="video/mp4"></source>
        </video>
      </div>
    </div>
  );
}

export default Projets;
