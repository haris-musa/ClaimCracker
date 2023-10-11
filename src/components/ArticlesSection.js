import React from "react";

function ArticlesSection() {
  const data = [
    {
      image: "./3.jpg",
      heading:
        "Research in the Post-Pandemic Era: Challenges and Opportunities",
      details:
        "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    },
    {
      image: "./4.jpg",
      heading: "The Role of Citizen Science: Engaging the Public in Research",
      details:
        "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    },
    {
      image: "./5.jpg",
      heading:
        "Research Funding in a Competitive Landscape: Strategies for Success",
      details:
        "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    },
    {
      image: "./6.jpg",
      heading: "Science Communication: Sharing Your Research with the World",
      details:
        "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    },
    {
      image: "./7.jpg",
      heading:
        "Research in the Age of AI: Machine Learning's Impact on Scientific Discovery",
      details:
        "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    },
    {
      image: "./8.jpg",
      heading:
        "Staying Organized: Tips for Managing Research Projects Successfully",
      details:
        "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    },
  ];

  return (
    <div
      className=" flex flex-wrap relative    items-center justify-center  w-[100%]  "
      id="articles"
    >
      {/* first row */}
      {data.map((i, ind) => {
        return (
          <>
            <div className=" flex  flex-wrap  lg:w-[30%] p-6  xl:w-[30%] sm:w-full w-full mt-[5%]">
              <div className="    justify-around flex ">
                {/* First Card */}

                <div class=" bg-white border border-gray-300  shadow-lg">
                  <a href="#">
                    <img class="rounded-t-lg" src={i.image} alt="" />
                  </a>
                  <div class="p-5">
                    <a href="#">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-black ">
                        {i.heading}
                      </h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      {i.details}
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

export default ArticlesSection;
