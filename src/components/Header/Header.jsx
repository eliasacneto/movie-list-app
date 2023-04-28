import "./index.scss";
import Logo from "../../assets/images/logo.png";

const Header = () => {
  return (
    <div className='Header'>
      <img className='logo' src={Logo} alt='logo' />
      <h1>PopMovies!</h1>
      <nav>
        <input type='text' placeholder='🔎 Search a movie...' />
        <button>😎</button>
      </nav>
    </div>
  );
};

export default Header;
