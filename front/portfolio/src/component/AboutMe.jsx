import { forwardRef, useEffect, useRef, useState } from "react";
import styles from "../component/AboutMe.module.css";

const AboutMe = forwardRef((props, ref) => {
  const pointerRef = useRef(null);
  const aboutRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

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

  // Intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 } // déclenche à 30% de visibilité
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <>
      <div ref={pointerRef} className={styles.pointer}></div>
      <div
        ref={(el) => {
          aboutRef.current = el;
          if (ref) ref.current = el;
        }}
        className={`${styles.aboutMe} ${isVisible ? styles.scrolled : ""}`}
      >
        <p>
          Formé au développement web et diplômé assistant social, je suis à
          l'écoute de vos besoins, je vous accompagne tout au long du processus
          de création, puis je conçois un site internet fidèle à vos missions et
          valeurs.
        </p>
      </div>
    </>
  );
});

export default AboutMe;
