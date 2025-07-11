import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router";
import Home from "./page/Home.jsx";

function App() {
  return (
    <>
      <div className="blop1" style={{ top: "10rem", left: "3rem" }}></div>
      <div className="blop2" style={{ top: "22rem", right: "4rem" }}></div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
