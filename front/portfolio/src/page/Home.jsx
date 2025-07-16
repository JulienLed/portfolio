import Banner from "../component/Banner.jsx";
import Navbar from "../component/Navbar.jsx";
import AboutMe from "../component/AboutMe.jsx";
import { ButtonScrollDown } from "../component/Button.jsx";
import Projets from "../component/Projets.jsx";
import Contact from "../component/Contact.jsx";
import { useRef } from "react";

function Home() {
  const aboutRef = useRef(null);
  const handleClick = () => {
    if (aboutRef) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Navbar />
      <Banner />
      <ButtonScrollDown handleClick={handleClick} />
      <AboutMe aboutRef={aboutRef} />
      <Projets />
      <Contact />
    </>
  );
}

export default Home;
