import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
// import HomeHero from "./Component/Home/HomeHero"
import Home from './Pages/Home'
import Navbar from "./Component/Header/Navbar";
import Footer from "./Component/UI/Footer";
import Courses from "./Pages/Cources";
import About from "./Pages/About";
import Prices from "./Pages/Prices";
import Contact from "./Pages/Contact";
import CourseDetailPage from "./Pages/CourseDetailPage";



function App() {
  

useEffect(() => {
  AOS.init({
    duration: 1000, // animation duration (ms)
    once: true, // animate only once
    offset: 100, // start animation before element enters viewport
  });
}, []);


  return (
    <div>
      <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/about" element={<About />} />
        <Route path="/prices" element={<Prices />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/course/:id" element={<CourseDetailPage />} />
        
      </Routes>
      <Footer/>
    </Router>
    </div>
  )
}

export default App
