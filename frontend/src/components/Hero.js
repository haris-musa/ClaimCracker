import React, { useState, useEffect } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import ParticlesBackground from "./ParticlesBackground";
import TypingAnimation from "./TypingAnimation";
import OneWayTypingAnimation from "./OneWayTypingAnimation";
import questions from "../questions.json";

function Hero({ onPredict }) {
  const [searchText, setSearchText] = useState("");
  const [prediction, setPrediction] = useState(null);
  const [validationMessage, setValidationMessage] = useState("");
  const [randomQuestions, setRandomQuestions] = useState([]);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [isTyping, setIsTyping] = useState(false);
  const [answer, setAnswer] = useState(null);

  useEffect(() => {
    const getRandomQuestions = () => {
      const shuffled = questions.sort(() => 0.5 - Math.random());
      return shuffled.slice(0, 4);
    };

    setRandomQuestions(getRandomQuestions());
  }, []);

  const handleQuestionClick = async (question) => {
    setSelectedQuestion(question);
    setAnswer(null);
    setIsTyping(false);
    try {
      const response = await fetch("http://localhost:8000/api/questions/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question: question }),
      });

      const data = await response.json();
      if (response.ok) {
        setIsTyping(true);
        setAnswer(data.answer);
      } else {
        setValidationMessage(data.error || "Error fetching answer");
      }
    } catch (error) {
      console.error("Error fetching answer:", error);
      setValidationMessage("Error fetching answer");
    }
  };

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const validateClaim = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/check_claim/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ claim: searchText }),
      });

      const data = await response.json();
      if (response.status === 400) {
        setValidationMessage(data.error);
        return false;
      }
      return true;
    } catch (error) {
      console.error("Error validating claim:", error);
      setValidationMessage("Error validating claim");
      return false;
    }
  };

  const handleSearchSubmit = async () => {
    const isValidClaim = await validateClaim();
    if (!isValidClaim) {
      setPrediction(null);
      return;
    }

    setValidationMessage("");
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
      onPredict();
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
              {validationMessage && (
                <div className="my-5 text-yellow-200">{validationMessage}</div>
              )}
              {prediction && (
                <div className="my-5 text-white">
                  <p>Prediction: {prediction.Ensemble ? "Real" : "Fake"}</p>
                </div>
              )}
            </div>
            <div className="questions-container grid grid-cols-2 gap-4 my-8">
              {randomQuestions.map((question, index) => (
                <div
                  key={index}
                  className={
                    "question-box p-4 bg-white bg-opacity-20 rounded-md cursor-pointer" +
                    (selectedQuestion === question
                      ? " question-box-clicked"
                      : "")
                  }
                  onClick={() => handleQuestionClick(question)}
                  style={{
                    transform:
                      selectedQuestion === question
                        ? "scale(0.98)"
                        : "scale(1)",
                    boxShadow:
                      selectedQuestion === question
                        ? "0px 0px 10px rgba(255, 255, 255, 0.6)"
                        : "none",
                  }}
                >
                  <p className="text-white">{question}</p>
                </div>
              ))}
            </div>
            {answer && (
              <div className="answer-container text-white my-8">
                {isTyping ? (
                  <OneWayTypingAnimation
                    className="md:text-2xl sm:text-xl text-lg font-medium answer-typing-animation"
                    text={answer}
                    typeSpeed={25}
                  />
                ) : (
                  answer && <p>{answer}</p>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
