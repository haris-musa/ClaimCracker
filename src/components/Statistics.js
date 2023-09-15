import React from "react";
import CountUp from "react-countup";

function Statistics() {
  return (
    <section class="relative text-gray-600 body-font border-[2px] border-gray-300 shadows-md">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap -m-4 text-center">
          <div class="p-4 sm:w-1/4 w-1/2">
            <h2 class="title-font font-medium sm:text-6xl text-3xl text-gray-900">
              <CountUp duration={10} end={2700} />
            </h2>
            <p class="leading-loose m-4 sm:text-3xl">Claims Verified</p>
          </div>
          <div class="p-4 sm:w-1/4 w-1/2">
            <h2 class="title-font font-medium sm:text-6xl text-3xl text-gray-900">
              <CountUp duration={10} end={1800} />
            </h2>
            <p class="leading-loose m-4 sm:text-3xl ">Dataset Records</p>
          </div>
          <div class="p-4 sm:w-1/4 w-1/2">
            <h2 class="title-font font-medium sm:text-6xl text-3xl text-gray-900">
              <CountUp duration={10} end={20} />
            </h2>
            <p class="leading-loose m-4 sm:text-3xl">Years Data</p>
          </div>
          <div class="p-4 sm:w-1/4 w-1/2">
            <h2 class="title-font font-medium sm:text-6xl text-3xl text-gray-900">
              <CountUp duration={10} end={20} />
            </h2>
            <p class="leading-loose m-4 sm:text-3xl">Blogs</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Statistics;
