import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import AuthPage from "./sections/AuthPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AuthPage />} />      
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;

