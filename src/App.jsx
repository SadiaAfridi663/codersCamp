import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import HomeHero from "./Component/Home/HomeHero"
import Home from './Pages/Home'
import Navbar from "./Component/Header/Navbar";
import Courses from "./Pages/Cources";
import About from "./Pages/About";
import Prices from "./Pages/Prices";
import Contact from "./Pages/Contact";

function App() {

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
      </Routes>
    </Router>
    </div>
  )
}

export default App
