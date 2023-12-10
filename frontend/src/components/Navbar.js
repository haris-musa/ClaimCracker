import React, { useState } from "react";
import NavButtons from "../constants/NavButtons";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div>
      <nav
        className="fixed w-full bg-[#A23FF4] p-4 z-50"
        style={{ opacity: 0.9 }}
      >
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a
            className="flex ml-5 items-center"
            href="/"
            onClick={(e) => {
              e.preventDefault();
              window.location.reload();
            }}
          >
            <img src="/logo.jpg" width={"50px"} alt="Logo" />
            <p className="hidden lg:block text-xl text-white ml-3 cursor-pointer">
              ClaimCracker
            </p>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:justify-center lg:m-auto lg:gap-10  space-x-4">
            {/* Nav Items */}
            <a href="#" className="text-gray-300 text-xl hover:text-[#1D0F41]">
              <NavButtons
                ButtonText="Home"
                onClick={(event) => scrollToSection(event, "hero")}
              />
            </a>
            {/* More Nav Items... */}
            <a href="#" className="text-gray-300 text-xl hover:text-[#1D0F41]">
              <NavButtons
                ButtonText="Blogs"
                onClick={(event) => scrollToSection(event, "articles")}
              />
            </a>
            <a href="#" className="text-gray-300 text-xl hover:text-[#1D0F41]">
              <NavButtons
                ButtonText="Model"
                onClick={(event) => scrollToSection(event, "model")}
              />
            </a>
            <a href="#" className="text-gray-300 text-xl hover:text-[#1D0F41]">
              <NavButtons
                ButtonText="About Us"
                onClick={(event) => scrollToSection(event, "flow")}
              />
            </a>
          </div>

          {/* Hamburger Icon */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="flex items-center px-3 py-2 text-white"
            >
              {/* Icon */}
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
          <div className="lg:hidden absolute right-0 mt-2 py-2 px-4 bg-purple-600 rounded-lg shadow-lg text-white">
            <a href="#" className="block mt-2 text-xl hover:text-[#1D0F41]">
              <NavButtons
                ButtonText="Home"
                onClick={(event) => scrollToSection(event, "hero")}
              />
            </a>
            {/* More Mobile Menu Items... */}
            <a href="#" className="block mt-2 text-xl hover:text-[#1D0F41]">
              <NavButtons
                ButtonText="Blogs"
                onClick={(event) => scrollToSection(event, "articles")}
              />
            </a>
            <a href="#" className="block mt-2 text-xl hover:text-[#1D0F41]">
              <NavButtons
                ButtonText="Model"
                onClick={(event) => scrollToSection(event, "model")}
              />
            </a>
            <a href="#" className="block mt-2 text-xl hover:text-[#1D0F41]">
              <NavButtons
                ButtonText="About Us"
                onClick={(event) => scrollToSection(event, "flow")}
              />
            </a>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
