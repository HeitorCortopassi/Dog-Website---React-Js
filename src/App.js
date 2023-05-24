import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Breeds from "./Breeds";
import Menu from "./Menu";

export default function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/breeds" element={<Breeds />} />
      </Routes>
      <footer>&#169; Heitor Cortopassi - WebMobile</footer>
    </BrowserRouter>
  );
}
