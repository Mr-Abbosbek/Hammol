import React, { useState } from "react";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { Link } from "react-router-dom";

function Header() {
  const [mode, setMode] = useState(false);
  const body = document.querySelector("body");
  const bgColorHandler = () => {
    setMode(!mode);
    body.classList.toggle("bodyColor");
  };

  return (
    <div className="py-4 shadow-sm position-fixed w-100 header_block">
      <div className="container d-flex justify-content-between align-item-center">
        <h2 className="m-0 fw-bold"><Link to="/">Product</Link></h2>
        <button
          className={
            !mode
              ? "border-0 bg-transparent text-black fw-bold d-flex align-items-center"
              : "border-0 bg-transparent text-white fw-bold"
          }
          onClick={bgColorHandler}
        >
          <span className="px-2">{!mode ? <DarkModeIcon /> : <WbSunnyIcon />}{""}</span>
          {!mode ? "Dark mode" : "Light mode"}{" "}
        </button>
      </div>
    </div>
  );
}

export default Header;
