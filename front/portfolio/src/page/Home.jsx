import Banner from "../component/Banner.jsx";
import Navbar from "../component/Navbar.jsx";
import AboutMe from "../component/AboutMe.jsx";
import Button from "../component/Button.jsx";
import Projets from "../component/Projets.jsx";
import { useRef } from "react";

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Button />
      <AboutMe />
      <Projets />
    </>
  );
}

export default Home;
