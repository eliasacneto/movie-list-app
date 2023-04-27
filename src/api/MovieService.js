import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "5e39f4876e780854a14a4b35eda8c0cd";

const withBaseUrl = (path) => `${BASE_URL}${path}?api_key=${API_KEY}`;

export class MovieService {
  static getMovies() {
    return axios(withBaseUrl("movie/popular"));
  }

  static getMovieDetails(id) {
    return axios(withBaseUrl(`movie/${id}`));
  }

  static searchMovies(movie) {
    return axios(withBaseUrl("search/movie") + `&query=${movie}`);
  }
}
