import React from "react";
import Image from "../constants/Image";
function ModelWorking() {
  const CardsData = [
    {
      image: (
        <Image
          alt="Image 1"
          width={40}
          height={40}
          dataNimg={1}
          className="w-full h-full object-contain object-center"
          src="/images/4.svg"
        />
      ),
      title: "Easy Searching",
      text: "Easily identify valid claims in a sea of information with ClaimCracker's advanced search and detection capabilities.",
    },
    {
      image: (
        <Image
          alt="Image 2"
          width={40}
          height={40}
          dataNimg={1}
          className="w-full h-full object-contain object-center"
          src="/images/2.svg"
        />
      ),

      title: "Claim Verification",
      text: "Seamlessly integrate credible sources and data with ClaimCracker, enhancing accuracy and reliability in claim verification.",
    },
    {
      image: (
        <Image
          alt="Image 3"
          width={40}
          height={40}
          dataNimg={1}
          className="w-full h-full object-contain object-center"
          src="/images/3.svg"
        />
      ),

      title: "Data Visualization",
      text: "Efficiently analyze and visualize the authenticity of political claims with ClaimCracker's dynamic statistics.",
    },

    {
      image: (
        <Image
          alt="Image 4"
          width={40}
          height={40}
          dataNimg={1}
          className="w-full h-full object-contain object-center"
          src="/images/1.svg"
        />
      ),
      title: "Customized Analysis",
      text: "Customize your fact-checking experience with ClaimCracker's flexible interface, tailored to your specific needs for accuracy and ease.",
    },

    {
      image: (
        <Image
          alt="Image 5"
          width={40}
          height={40}
          dataNimg={1}
          className="w-full h-full object-contain object-center"
          src="/images/5.svg"
        />
      ),

      title: "Collaborative Fact-Checking",
      text: "Collaborate effectively with a team of fact-checkers using ClaimCracker's intuitive results of claim verification processes.",
    },

    {
      image: (
        <Image
          alt="Image 6"
          width={40}
          height={40}
          dataNimg={1}
          className="w-full h-full object-contain object-center"
          src="/images/6.svg"
        />
      ),

      title: "Real-Time Updates",
      text: "Enhance teamwork in debunking false information with ClaimCracker's collaborative platform, promoting informed decision-making.",
    },
  ];
  return (
    <div className="relative  p-[8%] z-10" id="model">
      <h1 className=" text-5xl text-black text-center max-[500px]:text-2xl max-[500px]:w-full">
        Why are we the Best?
      </h1>

      {/* Cards */}
      <div className="grid grid-cols-3 max-[900px]:grid-cols-2 max-[550px]:grid-cols-1 gap-10 m-auto my-10">
        {CardsData.map((element, index) => {
          return (
            <div
              key={index}
              className="p-[10%] 	bg-white shadow-md rounded-md group"
            >
              {/* Images */}
              <div className=" w-[20%] max-[900px]:m-auto max-[900px]:mb-10 mb-8 items-center  text-5xl  group-hover:scale-110 transition-transform ">
                {element?.image}
              </div>
              {/* Text */}
              <div className="relative max-[900px]:text-center ">
                <h6 className="absolute -top-[22px] w-full font-bold text-sm">
                  {element.title}
                </h6>

                <p className="bottom-0 text-body pt-2 w-full text-sm">
                  {element.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ModelWorking;
