import React from "react";
import CountUp from "react-countup";

function Statistics({ claimsVerified }) {
  return (
    <section className="relative text-gray-600 body-font bg-gray-100 border-gray-300 ">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap justify-center -m-4 text-center">
          <div className="p-4 sm:w-1/4 w-1/2">
            <h2 className="title-font font-medium sm:text-6xl text-3xl text-gray-900">
              <CountUp duration={10} end={claimsVerified} />
            </h2>
            <p className="leading-loose m-4 sm:text-3xl">Claims Verified</p>
          </div>

          <div className="p-4 sm:w-1/4 w-1/2">
            <h2 className="title-font font-medium sm:text-6xl text-3xl text-gray-900">
              <CountUp duration={10} end={17424} />
            </h2>
            <p className="leading-loose m-4 sm:text-3xl ">Dataset Records</p>
          </div>

          <div className="p-4 sm:w-1/4 w-1/2">
            <h2 className="title-font font-medium sm:text-6xl text-3xl text-gray-900">
              <CountUp duration={10} end={5} />
            </h2>
            <p className="leading-loose m-4 sm:text-3xl">Years Data</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Statistics;
