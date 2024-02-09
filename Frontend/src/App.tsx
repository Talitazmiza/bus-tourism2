import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
//importing react slick slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { animateScroll } from "react-scroll";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login.tsx";
import Dashboard from "./components/pages/Admin/Dashboard.tsx";
import DashboardFleet from "./components/pages/Admin/Fleet/DashboardFleet.tsx";
import DashboardSchedule from "./components/pages/Admin/Schedule/DashboardSchedule.tsx";
import DashboardDestination from "./components/pages/Admin/Destination/DashboardDestination.tsx";
import DashboardTransaction from "./components/pages/Admin/Transaction/DashboardTransaction.tsx";
import DashboardUser from "./components/pages/Admin/users/Dashboarduser.tsx";
import SettingPermission from "./components/pages/Admin/users/SettingPermission.tsx";
import DashboardRole from "./components/pages/Admin/users/DashboardRole.tsx";

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
        <Route path="/dashboard-fleet" element={<DashboardFleet />}/>
        <Route path="/dashboard-schedule" element={<DashboardSchedule />}/>
        <Route path="/dashboard-destination" element={<DashboardDestination />}/>
        <Route path="/dashboard-transaction" element={<DashboardTransaction />}/>
        <Route path="/dashboard-user" element={<DashboardUser />}/>
        <Route path="/dashboard-role" element={<DashboardRole />} />
        <Route path="/setting-permission" element={<SettingPermission />}/>
        <Route path="/setting-permission" element={<SettingPermission />}/>

      </Routes>
    </div>
  )
}

export default App
