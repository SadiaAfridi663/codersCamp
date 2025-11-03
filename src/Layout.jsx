import { Routes, Route, useLocation } from "react-router-dom";

import Home from "./Pages/Home";
import Navbar from "./Component/Header/Navbar";
import Footer from "./Component/UI/Footer";
import Courses from "./Pages/Cources";
import About from "./Pages/About";
import Prices from "./Pages/Prices";
import Contact from "./Pages/Contact";
import CourseDetailPage from "./Pages/CourseDetailPage";
import Login from "./Component/Auth/Login";
import Register from "./Component/Auth/Register";
import Enroll from "./Pages/Enroll";
import Blog from "./Pages/Blog";
import ScrollToTop from "./Component/ScrollToTop";

function Layout() {
  const location = useLocation();
  const hideNavFooter =
    location.pathname === "/login" || location.pathname === "/register";

  return (
    <>
      <ScrollToTop />
      {!hideNavFooter && <Navbar />}

      {/* Wrap all your routes inside <Routes> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/prices" element={<Prices />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/course/:id" element={<CourseDetailPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/enroll/:id" element={<Enroll />} />
      </Routes>

      {!hideNavFooter && <Footer />}
    </>
  );
}

export default Layout;
