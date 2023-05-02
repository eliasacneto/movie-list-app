import { Link } from "react-router-dom";
import "./index.scss";
const MovieCard = ({ movieProp }) => {
  console.log(movieProp);

  return (
    <div className='MovieCard'>
      <div className='movie-image'>
        <Link to={`/movie/${movieProp.id}`}>
          <img
            src={`https://image.tmdb.org/t/p/w1280/${movieProp.poster_path}`}
            alt={""}
          />
        </Link>
      </div>
      <div className='movie-description'>
        <Link to={`/movie/${movieProp.id}`} className='title-movie'>
          <h3>{movieProp.title}</h3>
        </Link>
        <Link to={`/movie/${movieProp.id}`}>
          <button className='btn-red'>See more</button>
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
