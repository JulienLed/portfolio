import styles from "./Contact.module.css";
import { useEffect, useState } from "react";

function Contact({ contactRef }) {
  const [opacity, setOpacity] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("En construction. Le mail sera configuré prochainement");
  };

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
    <div ref={contactRef} style={{ opacity }} className={styles.contact}>
      <h3>Contact</h3>
      <div className={styles.contactForm}>
        <p>
          N'hésitez pas à me contacter pour plus d'informations ou pour discuter
          de votre projet !
        </p>
        <form onSubmit={(e) => handleSubmit(e)} className={styles.form}>
          <label for="name" className={styles.label}>
            Votre nom
          </label>
          <input id="name" className={styles.input} type="text"></input>
          <label for="theme" className={styles.label}>
            Thématique du contact
          </label>
          <input id="theme" className={styles.input} type="text"></input>
          <label for="message" className={styles.label}>
            Votre message
          </label>
          <textarea
            id="message"
            className={styles.textarea}
            cols={59}
            rows={5}
          ></textarea>
          <button type="submit" className={styles.submitButton}>
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
