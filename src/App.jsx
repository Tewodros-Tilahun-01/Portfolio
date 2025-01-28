import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";

import Project from "./components/Project";
import About from "./components/About";
import Footer from "./components/Footer";
import SkillsSection from "./components/SkillsSection";
function App() {
  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React.js",
    "Node.js",
    "MongoDB",
    "Express.js",
    "Git",
  ];

  return (
    <div className="bg-custom text-white ">
      <Header />
      <main className="px-4 md:px-16 lg:px-20  pt-12">
        <Hero />
      </main>
      <About />

      <Project />
      <SkillsSection />
      <Footer />
    </div>
  );
}

export default App;
