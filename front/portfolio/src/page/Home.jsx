import Banner from "../component/Banner.jsx";
import Navbar from "../component/Navbar.jsx";
import AboutMe from "../component/AboutMe.jsx";
import { ButtonScrollDown } from "../component/Button.jsx";
import Projets from "../component/Projets.jsx";
import Contact from "../component/Contact.jsx";
import { useRef } from "react";

function Home() {
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);
  const handleClick = (section) => {
    if (section === "about" && aboutRef) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "project" && projectRef) {
      projectRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "contact" && contactRef) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Navbar handleClick={handleClick} />
      <Banner />
      <ButtonScrollDown handleClick={handleClick} />
      <AboutMe aboutRef={aboutRef} />
      <Projets projectRef={projectRef} />
      <Contact contactRef={contactRef} />
    </>
  );
}

export default Home;
