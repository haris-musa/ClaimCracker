import React, { useState } from "react";
import NavButtons from "../constants/NavButtons";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (event, sectionId, offset) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      console.log(section);
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <div>
      <nav
        className=" w-full bg-gradient-to-r from-violet-500 to-fuchsia-500 p-4"
        id="nav"
      >
        <div className="flex justify-between items-center">
          <a className=" flex  items-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-purple-600 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="  lg:ml-3 lg:text-xl lg:text-white lg:cursor-pointer">
              <p className=" hidden sm:hidden md:hidden lg:block">
                ClaimCracker
              </p>
            </span>
          </a>

          <div className="hidden lg:flex lg:justify-center lg:m-auto lg:gap-10  space-x-4">
            <a href="#" className="text-white text-3xl hover:text-gray-300">
              <NavButtons
                ButtonText="Home"
                onClick={(event) => scrollToSection(event, "nav", 100)}
              />
            </a>
            <a href="#" className="text-white   text-3xl hover:text-gray-300">
              <NavButtons
                ButtonText="Articles"
                onClick={(event) => scrollToSection(event, "articles", 200)}
              />
            </a>
            <a href="#" className="text-white  text-3xl hover:text-gray-300">
              <NavButtons
                ButtonText="Claims"
                onClick={(event) => scrollToSection(event, "claims", 200)}
              />
            </a>
            <a href="#" className="text-white  text-3xl hover:text-gray-300">
              <NavButtons
                ButtonText="Model "
                onClick={(event) => scrollToSection(event, "model", 200)}
              />
            </a>
            <a href="#" className="text-white text-3xl hover:text-gray-300">
              <NavButtons
                ButtonText="Working "
                onClick={(event) => scrollToSection(event, "flow", 200)}
              />
            </a>
            <a href="#" className="text-white text-3xl hover:text-gray-300">
              <NavButtons
                ButtonText="About Us "
                onClick={(event) => scrollToSection(event, "about", 200)}
              />
            </a>
            {/* Add more menu items as needed */}
          </div>
          {/* Hamburger Icon */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="flex items-center px-3 py-2 text-white"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="lg:hidden absolute right-0 mt-2 py-2 px-4 bg-purple-600 border border-violet-200 rounded-lg shadow-lg text-white">
            <a
              href="#"
              className="block mt-2 text-black-500 hover:text-black-400"
            >
              <NavButtons ButtonText="Home" onClick={() => {}} />
            </a>
            <a
              href="#"
              className="block mt-2 text-black-500 hover:text-black-400"
            >
              <NavButtons ButtonText="Updates" onClick={() => {}} />
            </a>
            <a
              href="#"
              className="block mt-2 text-black-500 hover:text-black-400"
            >
              <NavButtons ButtonText="Get involved " onClick={() => {}} />
            </a>
            <a
              href="#"
              className="block mt-2 text-black-500 hover:text-black-400"
            >
              <NavButtons ButtonText="Get involved " onClick={() => {}} />
            </a>
            {/* Add more menu items as needed */}
          </div>
        )}

        {/* Regular Desktop Menu */}
      </nav>
    </div>
  );
}

export default Navbar;
