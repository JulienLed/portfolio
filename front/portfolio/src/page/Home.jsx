import Banner from "../component/Banner.jsx";
import Navbar from "../component/Navbar.jsx";
import AboutMe from "../component/AboutMe.jsx";
import { ButtonScrollDown } from "../component/Button.jsx";
import Projets from "../component/Projets.jsx";

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <ButtonScrollDown />
      <AboutMe />
      <Projets />
    </>
  );
}

export default Home;
