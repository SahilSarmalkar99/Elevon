import React from "react";
import Navbar from "./components/Navbar";
import BgVideo from "./components/BgVideo"; 
import CursorDot from "./components/CursorDot";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";

import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="relative w-full min-h-screen bg-black blur-overlay">

      {/* Background Video */}
      {/* <BgVideo /> */}

      {/* Navbar */}
      <Navbar />

      {/* Dot */}
      <CursorDot />

      {/* Page Content */}
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

    </div>
  );
};

export default App;