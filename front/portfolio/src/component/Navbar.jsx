import "../App.css";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <>
      <div className={styles.navbar}>
        <span className={styles.one}>À propos</span>
        <span className={styles.two}>Projets</span>
        <span className={styles.three}>Contact</span>
      </div>
    </>
  );
}

export default Navbar;
