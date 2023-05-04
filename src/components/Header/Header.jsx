import "./index.scss";
import Logo from "../../assets/images/logo.png";

const Header = (props) => {
  function handleSubmit(event) {
    event.preventDefault();
    const searchValue = event.target[0].value;
    props.onSubmit(searchValue);
    event.target[0].value = "";
  }
  return (
    <div className='Header'>
      <img className='logo' src={Logo} alt='logo' />
      <h1>PopMovies!</h1>
      <nav>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            className='search'
            placeholder='Search a movie...'
          />
        </form>
        <button>PM</button>
      </nav>
    </div>
  );
};

export default Header;
