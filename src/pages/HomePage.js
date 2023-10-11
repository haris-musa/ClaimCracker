import React from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Statistics from "../components/Statistics";
import CheckedClaim from "../components/CheckedClaim";
import ArticlesSection from "../components/ArticlesSection";
import FlowSection from "../components/FlowSection";
import Navbar from "../components/Navbar";
import ModelWorking from "../components/ModelWorking";
function HomePage() {
  return (
    <div>
      {" "}
      <Navbar />
      <Hero />
      <CheckedClaim />
      <Statistics />
      <ArticlesSection />
      <FlowSection />
      <ModelWorking />
      <Footer />
    </div>
  );
}

export default HomePage;
