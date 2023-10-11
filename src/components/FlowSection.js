import React from "react";
import Lottie from "lottie-react";
import animationData from "../assets/phone.json";
function FlowSection() {
  return (
    <div
      className=" flex flex-wrap    bg-black w-[100%]  min-h-screen mt-[5%] p-10"
      id="flow"
    >
      <p className="text-4xl text-white">Hello</p>
      <div className="relative  w-[100%]  min-h-screen my-auto ">
        <div className="absolute right-0    bg-green-400 w-[40%]  ">
          {/* <div className="    justify-around flex "> */}
          {/* First Card

                <div class=" bg-white border border-gray-300 shadow-lg">
                  <a href="#">
                    <img
                      class="rounded-t-lg  w-full"
                      height={300}
                      src={i.image}
                      alt=""
                    />
                  </a>
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
              </div> */}
          <Lottie animationData={animationData} />
        </div>
      </div>
    </div>
  );
}

export default FlowSection;
