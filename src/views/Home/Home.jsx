import { useEffect, useState } from "react";
import "./index.scss";
import { MovieService } from "../../api/MovieService";
import MovieCard from "../../components/MovieCard/MovieCard";
import Banner from "../../components/Banner/Banner";

const Home = () => {
  const [movies, setMovies] = useState([]);

  async function getMovies() {
    const {
      data: { results },
    } = await MovieService.getMovies();
    setMovies(results);
  }

  useEffect(() => {
    getMovies();
  }, []);

  useEffect(() => {
    console.log(movies);
  });

  return (
    <section className='Home'>
      <Banner />

      <div className='cards'>
        {movies.map((movie) => (
          <div key={movie.id}>
            <MovieCard movieProp={movie} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Home;
