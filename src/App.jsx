// import { useState } from "react";
import "./App.css";
import { NavLink, Routes, useNavigate } from "react-router-dom";
import { Route } from "react-router-dom";
import Red from "./routes/Red";
import Blue from "./routes/Blue";
import Green from "./routes/Green";
import DynamicColorPage from "./routes/DynamicColorPage";

function App() {
  const navigate = useNavigate();
  const pageRoutes = ["/", "/green", "/blue"];

  return (
    <>
      <nav className="navigation">
        <ul className="nav-menu">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/green">Green Page</NavLink>
          </li>
          <li>
            <NavLink to="/blue">Blue Page</NavLink>
          </li>
        </ul>
        <button
          onClick={() => {
            const randomPageIndex = Math.floor(
              Math.random() * pageRoutes.length
            );
            navigate(pageRoutes[randomPageIndex]);
          }}
        >
          Random Page
        </button>
      </nav>
      <Routes>
        <Route path="/" element={<Red />} />
        <Route path="/green" element={<Green />} />
        <Route path="/blue" element={<Blue />} />
        <Route path="/:hexColor" element={<DynamicColorPage />} />
      </Routes>
    </>
  );
}

export default App;
