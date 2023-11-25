import React from "react";

function CheckedClaim() {
  const data = [
    {
      image: "./1.jpg",
      heading:
        "The Researcher's Toolkit: Essential Skills for Effective Studies",
      details: "Dummy text",
    },
    {
      image: "./15.jpg",
      heading:
        "Navigating the World of Peer-Reviewed Journals: A Guide for Researchers",
      details: "Dummy text",
    },
    {
      image: "./10.jpg",
      heading: "From Hypothesis to Conclusion: Mastering the Research Process",
      details: "Dummy text",
    },
    {
      image: "./11.jpg",
      heading:
        "Big Data and Beyond: The Evolution of Research in the Digital Age",
      details: "Dummy text",
    },
    {
      image: "./12.jpg",
      heading: "The Power of Interdisciplinary Research: Breaking Down Silos",
      details: "Dummy text",
    },
    {
      image: "./14.jpg",
      heading: "The Role of Research in Solving Real-World Problems",
      details: "Dummy text",
    },
  ];
  return (
    <div>
      {/* Div containing Rows */}
      <div
        className="flex flex-wrap  w-[100%]  py-[4%] items-center justify-center sm:flex-auto flex-auto  mt-[5%]"
        id="claims"
      >
        {data.map((item, ind) => {
          return (
            <>
              <div className="flex  relative flex-wrap items-center justify-center  p-10  lg:w-[40%] xl:w-[30%] sm:w-full w-full">
                {/* FirstCard */}
                <a
                  href="#"
                  class="flex flex-col items-center bg-white border border-gray-300 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-200 "
                >
                  <img
                    class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                    src={item.image}
                    alt=""
                  />
                  <div class="flex flex-col justify-between p-4 leading-normal">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                      {item.heading}
                    </h5>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      {item.details}
                    </p>
                  </div>
                </a>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default CheckedClaim;
