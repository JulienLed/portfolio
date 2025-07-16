import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router";
import Home from "./page/Home.jsx";

function App() {
  return (
    <>
      <div className="blop1" style={{ top: "4%", left: "6%" }}></div>
      <div className="blop2" style={{ top: "18%", right: "6%" }}></div>

      <div className="blop2" style={{ top: "98%", left: "6%" }}></div>

      <div className="blop1" style={{ top: "140%", right: "6%" }}></div>
      <div className="blop2" style={{ top: "220%", left: "6%" }}></div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
