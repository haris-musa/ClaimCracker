import React from "react";

function NavButtons({ ButtonText, onClick }) {
  return (
    <div onClick={onClick} className="hover-button">
      <span className="font-thin">{ButtonText}</span>
    </div>
  );
}

export default NavButtons;
