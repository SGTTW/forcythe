// import './App.css'
import Carousel from "./components/Carousel";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Testimonials from "./components/Testimonials";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <HeroSection />
        <Carousel />
        <Testimonials />
        <Routes>
          <Route path="/" element={<Navbar />} />
          {/* {/* <Route path="/" element={<HeroSection />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
