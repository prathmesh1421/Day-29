import { useState } from "react";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Patients from "./components/Patients";
import Doctors from "./components/Doctors";
import Login from "./components/Login";

import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import "./App.css";

export default function App() {
  const [user, setUser] = useState(null);

  // LOGIN
  const handleLogin = (userData) => {
    setUser(userData);
  };

  // LOGOUT
  const handleLogout = () => {
    setUser(null);
  };

  // LOGIN PAGE
  if (!user) {
    return <Login onLoginSuccess={handleLogin} />;
  }

  return (
    <div className="layout">
      <Sidebar />

      <div className="main">

        {/* HEADER */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Header />

          <button
            onClick={handleLogout}
            style={{
              height: "40px",
              marginTop: "20px",
              background: "red",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              padding: "0 15px",
            }}
          >
            Logout
          </button>
        </div>

        {/* ROUTES */}
        <Routes>

          <Route
            path="/"
            element={<Navigate to="/dashboard" />}
          />

          <Route
            path="/dashboard"
            element={<Dashboard />}
          />

          <Route
            path="/patients"
            element={<Patients />}
          />

          <Route
            path="/doctors"
            element={<Doctors />}
          />

        </Routes>
      </div>
    </div>
  );
}
