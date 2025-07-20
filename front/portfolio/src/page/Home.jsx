import Banner from "../component/Banner.jsx";
import Navbar from "../component/Navbar.jsx";
import AboutMe from "../component/AboutMe.jsx";
import { ButtonScrollDown } from "../component/Button.jsx";
import Projets from "../component/Projets.jsx";
import Contact from "../component/Contact.jsx";
import { useRef, useState, useEffect } from "react";

function Home() {
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  const [aboutVisible, setAboutVisible] = useState(false);
  const [projectVisible, setProjectVisible] = useState(false);
  const [contactVisible, setContactVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === aboutRef.current && entry.isIntersecting) {
            setAboutVisible(true);
          }
          if (entry.target === projectRef.current && entry.isIntersecting) {
            setProjectVisible(true);
          }
          if (entry.target === contactRef.current && entry.isIntersecting) {
            setContactVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) observer.observe(aboutRef.current);
    if (projectRef.current) observer.observe(projectRef.current);
    if (contactRef.current) observer.observe(contactRef.current);

    return () => observer.disconnect();
  }, []);

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
      <AboutMe aboutRef={aboutRef} isVisible={aboutVisible} />
      <Projets projectRef={projectRef} isVisible={projectVisible} />
      <Contact contactRef={contactRef} isVisible={contactVisible} />
    </>
  );
}

export default Home;
