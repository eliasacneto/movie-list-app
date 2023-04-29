import "./index.scss";
import Logo from "../../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faSearch,
  faUser,
  faUserCog,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className='Header'>
      <img className='logo' src={Logo} alt='logo' />
      <h1>PopMovies!</h1>
      <nav>
        <input
          type='text'
          className='search'
          placeholder=' Search a movie...'
        ></input>
        <button>PM</button>
      </nav>
    </div>
  );
};

export default Header;
