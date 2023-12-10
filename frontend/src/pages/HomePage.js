import React, { useState } from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Statistics from "../components/Statistics";
import ArticlesSection from "../components/ArticlesSection";
import FlowSection from "../components/FlowSection";
import Navbar from "../components/Navbar";
import ModelWorking from "../components/ModelWorking";
function HomePage() {
  const [claimsVerified, setClaimsVerified] = useState(0);
  const handlePrediction = () => {
    setClaimsVerified((prev) => prev + 1);
  };
  return (
    <div>
      {" "}
      <Navbar />
      <Hero onPredict={handlePrediction} />
      <ArticlesSection />
      <Statistics claimsVerified={claimsVerified} />
      <ModelWorking />
      <FlowSection />
      <Footer />
    </div>
  );
}

export default HomePage;
