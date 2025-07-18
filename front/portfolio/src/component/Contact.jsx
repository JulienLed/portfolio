import styles from "./Contact.module.css";
import { useEffect, useState } from "react";

function Contact({ contactRef }) {
  const [opacity, setOpacity] = useState(0);
  const [astTextOpacity, setAstTextOpacity] = useState(0);
  const [mailInfo, setMailInfo] = useState({
    name: "",
    theme: "",
    message: "",
  });
  const apiUrl = import.meta.env.VITE_API_URL;

  //Gère l'envoi du mail via le formulaire
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await fetch(`${apiUrl}/mail`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: mailInfo.name,
          theme: mailInfo.theme,
          message: mailInfo.message,
        }),
      });
      const responseJson = await response.json();
      setMailInfo((prev) => ({ ...prev, name: "", theme: "", message: "" }));
      alert(responseJson.message);
    } catch (error) {
      console.log(error);
    }
  };

  //Change l'opacité du texte sous astérisque
  const handleClick = () => {
    astTextOpacity === 0 ? setAstTextOpacity(1) : setAstTextOpacity(0);
  };

  // Afficher progressivement quand on scroll
  useEffect(() => {
    const handleScroll = () => {
      const elementHeight = window.innerHeight;
      const element = contactRef.current;
      const positionYElement = element.getBoundingClientRect();

      let newOpacity = 1 - Math.abs(positionYElement.top) / elementHeight;
      newOpacity = Math.max(0, Math.min(1, newOpacity));

      setOpacity(newOpacity);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(contactRef);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={contactRef} style={{ opacity }} className={styles.contact}>
      <h3>Contact</h3>
      <div className={styles.contactForm}>
        <p>
          N'hésitez pas à me contacter pour plus d'informations ou pour discuter
          de votre projet ! <span>*</span>
        </p>
        <form onSubmit={(e) => handleSubmit(e)} className={styles.form}>
          <label htmlFor="name" className={styles.label}>
            Votre nom
          </label>
          <input
            onChange={(e) => {
              setMailInfo((prev) => ({ ...prev, name: e.target.value }));
            }}
            value={mailInfo.name}
            id="name"
            className={styles.input}
            type="text"
          ></input>
          <label htmlFor="theme" className={styles.label}>
            Thématique du contact
          </label>
          <input
            onChange={(e) => {
              setMailInfo((prev) => ({ ...prev, theme: e.target.value }));
            }}
            value={mailInfo.theme}
            id="theme"
            className={styles.input}
            type="text"
          ></input>
          <label htmlFor="message" className={styles.label}>
            Votre message
          </label>
          <textarea
            onChange={(e) => {
              setMailInfo((prev) => ({ ...prev, message: e.target.value }));
            }}
            value={mailInfo.message}
            id="message"
            className={styles.textarea}
            cols={59}
            rows={5}
          ></textarea>
          <button type="submit" className={styles.submitButton}>
            Envoyer
          </button>
        </form>
        <div className={styles.astContainer}>
          <span onClick={handleClick} className={styles.ast}>
            *
          </span>
          <span className={styles.astText} style={{ opacity: astTextOpacity }}>
            Aucune donnée n'est stockée sur ce site, elles sont uniquement
            transmises par email. Vous pouvez me demander à tout moment la
            suppression de vos données.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Contact;
