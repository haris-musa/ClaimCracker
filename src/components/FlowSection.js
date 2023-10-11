import React from "react";
import Lottie from "lottie-react";
import animationData from "../assets/phone.json";
function FlowSection() {
  return (
    <div
      className=" flex flex-wrap   w-[100%]  min-h-screen mt-[5%] p-10"
      id="flow"
    >
      <div className="relative p-12 w-[100%]  min-h-screen justify-center bg-red-400">
        <div className="mt-[100px]">
          <h1 className=" text-6xl text-white">
            Hello, Welcome to ClaimChecker
          </h1>
          <br />
          <h1 className=" text-4xl text-white">
            Check your Facts with Claim Cracker{" "}
          </h1>
          <br />

          <p className=" text-2xl text-white w-[40%] text-left">
            At the heart of our platform, we have a state-of-the-art Natural
            Language Processing (NLP) system that parses and understands the
            structure and semantics of the text you submit. Once your text is
            processed, our system cross-references it with a vast database of
            verified information to identify claims or statements that might
            need further verification. We also integrate with the ClaimBuster
            API, a leading tool in the fact-checking domain. This integration
            ensures that the text is checked against a wide array of sources and
            databases for utmost accuracy.{" "}
          </p>
          <br />
          <p className=" text-2xl text-white w-[40%] text-left">
            After the analysis is complete, our platform highlights parts of the
            text that might be inaccurate or contentious, providing you with
            relevant sources or references for each identified claim.It's worth
            noting that while our system is designed to be highly accurate, no
            fact-checking tool can guarantee 100% accuracy. We always recommend
            reviewing the provided sources and using your judgment i
            interpreting the results.
          </p>
        </div>
        <div className="absolute right-0 top-3 my-auto justify-center    w-[40%] h-[40%] ">
          <Lottie className="my-auto " animationData={animationData} />
        </div>
      </div>
    </div>
  );
}

export default FlowSection;
