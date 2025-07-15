import { useState, useEffect, useRef } from "react";
import styles from "./Projets.module.css";
import videoSrc from "../assets/Web App AS.mp4";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ButtonSliderNext, ButtonSliderPrev } from "./Button";

function Projets() {
  const [opacity, setOpacity] = useState(1);
  const videoRef = useRef(null);

  //Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    nextArrow: <ButtonSliderNext />,
    prevArrow: <ButtonSliderPrev />,
  };

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
      <div className={styles.projets}>
        <Slider {...settings}>
          <div className={styles.project1}>
            <h4>
              Web App AS : Application web simple de prise de rendez-vous. La
              première plage horaire disponible est définie lors de la prise de
              rendez-vous, avec l'un des assistants sociaux disponibles sur la
              plateforme.
            </h4>
            <video ref={videoRef} autoPlay muted loop>
              <source src={videoSrc} type="video/mp4"></source>
            </video>
          </div>
          <div className={styles.project2}>
            <p>Projet en cours...</p>
          </div>
          <div className={styles.project3}>
            <p>Projet en cours...</p>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Projets;
