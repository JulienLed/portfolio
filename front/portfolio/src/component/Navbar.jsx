import "../App.css";
import styles from "./Navbar.module.css";

function Navbar({ handleClick }) {
  return (
    <>
      <div className={styles.navbar}>
        <span onClick={() => handleClick("about")} className={styles.one}>
          À propos
        </span>
        <span onClick={() => handleClick("project")} className={styles.two}>
          Projets
        </span>
        <span onClick={() => handleClick("contact")} className={styles.three}>
          Contact
        </span>
      </div>
      <div className={styles.navbar_bg}></div>
    </>
  );
}

export default Navbar;
