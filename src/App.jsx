// import './App.css'
import Carousel from "./components/Carousel";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <HeroSection />
        <Carousel />
        <Routes>
          <Route path="/" element={<Navbar />} />
          {/* {/* <Route path="/" element={<HeroSection />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
