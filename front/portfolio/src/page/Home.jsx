import Banner from "../component/Banner.jsx";
import Navbar from "../component/Navbar.jsx";
import AboutMe from "../component/AboutMe.jsx";
import Button from "../component/Button.jsx";
import { useRef } from "react";

function Home() {
  const aboutMeRef = useRef(null);

  const handleClick = () => {
    aboutMeRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Navbar />
      <Banner />
      <Button onClick={handleClick} />
      <AboutMe />
    </>
  );
}

export default Home;
