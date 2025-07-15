import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router";
import Home from "./page/Home.jsx";

function App() {
  return (
    <>
      <div className="blop1" style={{ top: "4%", left: "6%" }}></div>
      <div className="blop2" style={{ top: "18%", right: "8%" }}></div>

      <div className="blop1" style={{ top: "72%", left: "4%" }}></div>

      <div className="blop2" style={{ top: "129%", right: "6%" }}></div>
      <div className="blop1" style={{ top: "190%", left: "9%" }}></div>
      <div className="blop2" style={{ top: "250%", right: "4%" }}></div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
