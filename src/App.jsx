import React from "react";
import Navbar from "./components/Navbar";
import CursorDot from "./components/CursorDot";
import PageTransition from "./components/PageTransition"; 
import { useLocation, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";

import useLenis from "./hooks/useLenis";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  const location = useLocation();
  useLenis();

  return (
    <div className="relative w-full min-h-screen bg-[#0a0a0a]">

      <ScrollToTop />
      <Navbar />
      <CursorDot />

      <PageTransition key={location.pathname}>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </PageTransition>

    </div>
  );
};

export default App;