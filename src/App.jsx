// import './App.css'
import Carousel from "./components/Carousel";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Testimonials from "./components/Testimonials";
import Vision from "./components/Vision";
import B2B from "./components/B2B";
import Stats from "./components/Stats";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import FloatingChat from "./components/FloatingChat";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <HeroSection />
        <Carousel />
        <Testimonials />

        <FloatingChat />
        <Vision />
        <B2B />
        <Stats />
        <Blog />
        <Footer />

        <Routes>
          <Route path="/" element={<Navbar />} />
          {/* {/* <Route path="/" element={<HeroSection />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
