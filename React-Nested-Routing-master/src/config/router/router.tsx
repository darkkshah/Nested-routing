import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../../pages/Login";
import DashboardPages from "../../pages/Dashboard";

export default function AppRouter() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard/*" element={<DashboardPages />} />
        </Routes>
      </Router>
    </>
  );
}
