import { BrowserRouter as Router } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
// import { AuthProvider } from "./Component/Auth/AuthLogic"; // ✅ correct path
import Layout from "./Layout";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 100 });
  }, []);

  return (
    <Router>
      {/* ✅ wrap the entire app in AuthProvider */}
      {/* <AuthProvider> */}
        <Layout />
      {/* </AuthProvider> */}
    </Router>
  );
}

export default App;
