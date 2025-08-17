import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import UserCard from "./components/UserCard";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className="relative min-h-screen overflow-x-hidden">
        {/* Soft gradient overlays over the background image */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-purple-900/40 via-transparent to-blue-900/40"></div>

        <Navbar />

        {/* Routed pages */}
        <div className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>

          {/* Signup & Cards row */}
          <div className="flex flex-wrap gap-6 justify-center items-start mt-8 px-4">
            <Signup />
            <UserCard name="Shubham Namdeo" email="shubham@example.com" />
            <UserCard name="John Doe" email="john.doe@example.com" />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
