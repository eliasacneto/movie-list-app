import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core";

import "./index.scss";

const Navbar = () => {
  return (
    <div className='Navbar'>
      <nav>
        <ul>
          <li className='active'>Browse</li>
          <li>Trending</li>
          <li>Categories</li>
          <li>Playlist</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
