import React, { useState } from "react";

import { close, logo, menu } from "../assets";

// array of navbar id and title
import { navLinks } from "../constants";

const Navbar = () => {
  return (
    <div className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />
    </div>
  );
};

export default Navbar;
