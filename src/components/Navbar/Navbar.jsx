import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCompass,
  faArrowTrendUp,
  faPlay,
  faBoxes,
} from "@fortawesome/free-solid-svg-icons";

import "./index.scss";

const Navbar = () => {
  return (
    <div className='Navbar'>
      <nav>
        <ul>
          <li className='active'>
            <FontAwesomeIcon icon={faCompass} className='icon' />
            Browse
          </li>
          <li>
            <FontAwesomeIcon icon={faArrowTrendUp} className='icon' />
            Trending
          </li>

          <li>
            <FontAwesomeIcon icon={faBoxes} className='icon' />
            Categories
          </li>
          <li>
            <FontAwesomeIcon icon={faPlay} className='icon' />
            Playlist
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
