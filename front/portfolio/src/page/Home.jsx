import Banner from "../component/Banner.jsx";
import Navbar from "../component/Navbar.jsx";
import AboutMe from "../component/AboutMe.jsx";
import Button from "../component/Button.jsx";

function Home({ scrolled }) {
  return (
    <>
      <Navbar />
      <Banner />
      <Button />
      <AboutMe />
    </>
  );
}

export default Home;
