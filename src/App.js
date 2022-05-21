import React from "react";
import "./index.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Project from "./routes/Project";
import Contact from "./routes/Contact";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/Portfolio-REACT/" element={<Home />} />
        <Route path="/Portfolio-REACT/project" element={<Project />} />
        <Route path="/Portfolio-REACT/about" element={<About />} />
        <Route path="/Portfolio-REACT/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
