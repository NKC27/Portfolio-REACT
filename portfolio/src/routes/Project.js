import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import WorkCard from "../components/WorkCard";

const Projects = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="PROJECTS" text="Some of my most recent work." />
      <WorkCard />
      <Footer />
    </div>
  );
};

export default Projects;
