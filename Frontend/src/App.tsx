import { Routes, Route, useLocation } from "react-router-dom";
//importing react slick slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { animateScroll } from "react-scroll";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login.tsx";
import Dashboard from "./components/pages/Admin/Dashboard.tsx";
import { useEffect } from "react";

function App() {
  const directory = useLocation();
  useEffect(() => {
    animateScroll.scrollToTop({
      duration: 0,
    });
  }, [directory.pathname]);

  return (
    <div className="w-full bg-white text-gray-950 font-poppins">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
      </Routes>
    </div>
  )
}

export default App
