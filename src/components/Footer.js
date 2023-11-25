import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 opacity-50 mt-[10%] text-center text-neutral-600  dark:text-neutral-200 lg:text-left">
      <div className="p-6 text-center text-white bg-gray-1000 opacity-60">
        <span>© 2023 Copyright:</span>
        <a
          className="font-semibold text-white"
          href="https://bahria.edu.pk/bukc/"
        >
          Bahria University
        </a>
      </div>
    </footer>
  );
}

export default Footer;
