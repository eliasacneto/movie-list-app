import { useEffect, useState } from "react";
import "./index.scss";
import { Link, useParams } from "react-router-dom";
import { MovieService } from "../../api/MovieService";

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
        <h1>About the movie</h1>
        <img src={`https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`} />
        <h3>{movie.title}</h3>
        <p>{movie.overview}</p>
        <p>Release Date: {movie.release_date}</p>
        <p>Budget spent: {movie.budget}</p>
        <p>Vote average: {movie.vote_average}</p>
        <p>Popularity: {movie.popularity}</p>

        <button className='btn-back'>
          <Link to={"/"} className='link'>
            Go back{" "}
          </Link>
        </button>
      </div>
    </>
  );
};

export default MovieDetail;
