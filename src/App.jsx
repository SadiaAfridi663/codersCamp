import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import HomeHero from "./Component/Home/HomeHero"
import Home from './Pages/Home'
import Navbar from "./Component/Header/Navbar";
// import Courses from "./pages/Courses";
// import About from "./pages/About";
// import Prices from "./pages/Prices";
// import Contact from "./pages/Contact";

function App() {

  return (
    <div>
      <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/courses" element={<Courses />} />
        <Route path="/about" element={<About />} />
        <Route path="/prices" element={<Prices />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
    </div>
  )
}

export default App
