import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import AuthRoutes from "./routes/AuthRoutes";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./theme";

import JobList from "./pages/JobList";
import Profile from "./pages/Profile";
import PaidMemberProfile from "./pages/PaidMemberProfile";
import MembershipPlan from "./pages/MembershipPlan";
import SignUp from "./pages/SignUp";

function App() {
  const checkProtectedRoute = () => {
    // const token = Utils.getCurrentToken();
    // if (!token) return '/auth';
    // else return '/app';
    return "auth";
  };
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Navigate replace to={checkProtectedRoute()} />}
          />
          <Route path="/auth/*" element={<AuthRoutes />} />
          {/* <Route path="/app/*" element={<AppRoutes />} /> */}
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/job-list" element={<JobList />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/paid-user" element={<PaidMemberProfile />} />
          <Route path="/membershipPlan" element={<MembershipPlan />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
