import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Button } from '@material-tailwind/react';
import AuthRoutes from "./routes/AuthRoutes";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import './App.css';

function App() {
  const checkProtectedRoute = () => {
    // const token = Utils.getCurrentToken();
    // if (!token) return '/auth';
    // else return '/app';
    return "auth";
  };
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Navigate replace to={checkProtectedRoute()} />}
        />
        <Route path="/auth/*" element={<AuthRoutes />} />
        {/* <Route path="/app/*" element={<AppRoutes />} /> */}
         <Route path="/home" element={<Home />} />
        {/* <Route path="/data-integrity" element={<Data />} /> */}
      </Routes>
    </BrowserRouter>
    <Footer/>
    </div>
  );
}

export default App;
