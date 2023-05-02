import { useEffect, useState } from "react";
import "./index.scss";
import { Link, useParams } from "react-router-dom";
import { MovieService } from "../../api/MovieService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faMoneyBill,
  faStar,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";

const MovieDetail = () => {
  const [movie, setMovie] = useState({});
  const { id } = useParams();

  async function getMovie() {
    const { data } = await MovieService.getMovieDetails(id);
    setMovie(data);
  }

  useEffect(() => {
    getMovie();
  }, []);

  useEffect(() => {
    console.log(movie);
  });

  return (
    <>
      <div className='MovieDetail'>
        <div className='movie-info'>
          <img
            className='movie-image'
            src={`https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`}
          />
          <div className='content'>
            <h1 className='title'>{movie.title}</h1>
            <p className='overview'>{movie.overview}</p>

            <div className='infos'>
              <p className='footer-info'>
                <FontAwesomeIcon icon={faStar} className='star' />
                <span className='red-text'>Votes average:</span>{" "}
                {movie.vote_average}
              </p>
              <p className='footer-info'>
                <FontAwesomeIcon icon={faMoneyBill} className='budget' />
                Budget spent: {movie.budget}
              </p>
            </div>
            <Link to={"/"} className='btn-back'>
              Go back
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetail;
