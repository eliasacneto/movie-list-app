import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCompass,
  faArrowTrendUp,
  faBoxes,
  faHeart,
  faList,
} from "@fortawesome/free-solid-svg-icons";

import "./index.scss";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className='Sidebar'>
      <nav>
        <ul>
          <li className='active'>
            <Link to={"/"} className='link'>
              <FontAwesomeIcon icon={faCompass} className='icon' />
              Browse
            </Link>
          </li>
          <li>
            <FontAwesomeIcon icon={faArrowTrendUp} className='icon' />
            Trending
          </li>

          <li>
            <FontAwesomeIcon icon={faList} className='icon' />
            Categories
          </li>
          <li>
            <FontAwesomeIcon icon={faHeart} className='icon' />
            Playlist
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
