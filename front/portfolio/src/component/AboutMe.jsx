import { useEffect, useRef, useState } from "react";
import styles from "../component/AboutMe.module.css";

const AboutMe = ({ aboutRef }) => {
  const pointerRef = useRef(null);
  const [opacity, setOpacity] = useState(0);

  // Pointeur qui suit la souris
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (pointerRef.current) {
        pointerRef.current.style.left = `${e.clientX - 75}px`;
        pointerRef.current.style.top = `${e.clientY - 75}px`;
      }
    };
    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
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
    <>
      <div ref={pointerRef} className={styles.pointer}></div>
      <div ref={aboutRef} className={styles.aboutMe} style={{ opacity }}>
        <h3>A Propos de moi</h3>
        <p>
          <span>Développeur Full Stack</span> autodidacte, je suis également
          diplômé <span>assistant social</span>. Cette double casquette me
          permet d'être un interlocuteur de choix pour toute association,
          institution ou service public souhaitant créer son site. Je peux vous
          accompagner tout au long du processus, afin que votre réseau et vos
          bénéficiaires puissent accéder à votre contenu de manière simple,
          claire et efficace.
        </p>
      </div>
    </>
  );
};

export default AboutMe;
