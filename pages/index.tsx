import type { NextPage } from "next";

import Hero from "../Components/Hero";
import Aboutme from "../Components/Aboutme";
import Skillpage from "../Components/Skillpage";
import Projects from "../Components/Projects";
import Contact from "../Components/Contact";

const Home: NextPage = () => {
  return (
    <div className="font-manrope">
      <Hero />
      <Aboutme />
      <Skillpage />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
