import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router";
import Home from "./page/Home.jsx";

function App() {
  return (
    <>
      <div className="blop1"></div>
      <div className="blop2"></div>

      <div className="blop3"></div>

      <div className="blop4"></div>
      <div className="blop5"></div>

      <div className="blop6"></div>
      <div className="blop7"></div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
