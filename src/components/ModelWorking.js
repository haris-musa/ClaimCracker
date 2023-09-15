import React from "react";

function ModelWorking() {
  const data = [
    {
      image: "./gg.png",
      heading: "Check your Facts with Claim Cracker      ",
      details:
        "At the heart of our platform, we have a state-of-the-art Natural Language Processing (NLP) system that parses and understands the structure and semantics of the text you submit. Once your text is processed, our system cross-references it with a vast database of verified information to identify claims or statements that might need further verification. We also integrate with the ClaimBuster API, a leading tool in the fact-checking domain. This integration ensures that the text is checked against a wide array of sources and databases for utmost accuracy.",
    },
    {
      image: "./nice.png",
      heading: "In addition to our Automated Fact Checker ",
      details:
        "After the analysis is complete, our platform highlights parts of the text that might be inaccurate or contentious, providing you with relevant sources or references for each identified claim.It's worth noting that while our system is designed to be highly accurate, no fact-checking tool can guarantee 100% accuracy. We always recommend reviewing the provided sources and using your judgment i interpreting the results.",
    },
  ];
  return (
    <div className=" flex flex-wrap relative  shadow-lg   items-center justify-center  w-[100%]  ">
      {/* first row */}
      {data.map((i, ind) => {
        return (
          <>
            <div className="p-6 flex  flex-wrap  lg:w-[30%] h-full xl:w-[30%] sm:w-full w-full">
              <div className="    justify-around flex ">
                <div class=" border border-gray-300  shadow-lg">
                  <div>
                    <a href="#">
                      <img
                        class="rounded-t-lg w-full"
                        height={300}
                        src={i.image}
                        alt=""
                      />
                    </a>
                  </div>

                  <div class="p-5">
                    <a href="#">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-black ">
                        {i.heading}
                      </h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      {`${i.details.slice(0, 200)}...`}
                    </p>
                    <a
                      href="#"
                      class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Read more
                      <svg
                        class="w-3.5 h-3.5 ml-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default ModelWorking;
