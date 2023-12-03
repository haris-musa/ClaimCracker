import React, { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import ParticlesBackground from "./ParticlesBackground";
import TypingAnimation from "./TypingAnimation";

function Hero() {
  const [searchText, setSearchText] = useState("");
  const [prediction, setPrediction] = useState(null);

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearchSubmit = async () => {
    try {
      const response = await fetch(
        "http://localhost:8000/api/classifier/predict/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ text: searchText }),
        }
      );

      const data = await response.json();
      setPrediction(data);
    } catch (error) {
      console.error("Error fetching prediction:", error);
    }
  };

  return (
    <>
      <section className="flex h-screen text-gray-600 body-font bg-gradient-to-r from-violet-500 to-fuchsia-500 relative">
        <ParticlesBackground />
        <div
          className="container mx-auto flex px-5 py-24 items-center justify-center flex-col"
          id="hero"
        >
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-8xl text-4xl mb-4 font-medium text-white">
              Find out the truth!
            </h1>
            <p className="leading-relaxed mb-8 text-white">
              ClaimCracker provides a way to quickly find out about the
              truthfulness of the claims made by
              <br />
              <TypingAnimation
                className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
                strings={["Politicians", "Celebrities", "Influencers"]}
                typeSpeed={120}
                delay={2000}
              />
            </p>
            <div className="relative justify-center max-[1000px]:w-[100%] w-[100%]">
              <div className="relative text-left">
                <input
                  value={searchText}
                  onChange={handleInputChange}
                  className="w-[100%] p-[5%] flex bg-inherit border-white rounded-full focus:outline-none text-sm py-3 text-white placeholder-white border-[1px]"
                  type="text"
                  placeholder="  Search"
                />
                <button
                  onClick={handleSearchSubmit}
                  className="absolute w-8 right-[15px] top-0 text-white group-hover:bg-gray-200 h-full flex items-center justify-center"
                >
                  <MagnifyingGlassIcon />
                </button>
              </div>
              {prediction && (
                <div className="my-5 text-white">
                  <p>LSTM Prediction: {prediction.LSTM ? "Real" : "Fake"}</p>
                  <p>
                    Bi-LSTM Prediction:{" "}
                    {prediction["Bi-LSTM"] ? "Real" : "Fake"}
                  </p>
                  <p>RNN Prediction: {prediction.RNN ? "Real" : "Fake"}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
