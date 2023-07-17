/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import axios from "axios";

export function MoviesIndex(props) {
  const baseImageUrl = "https://image.tmdb.org/t/p/original";
  const API_URL = "https://api.themoviedb.org/3";
  const BACKGROUND_IMAGE_PATH = "https://image.tmdb.org/t/p/w1280/";
  const API_KEY = "";
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState({});
  const [searchKey, setSearchKey] = useState("");

  const fetchMovies = async (searchKey) => {
    const type = searchKey ? "search" : "discover";
    const {
      data: { results },
    } = await axios.get(`${API_URL}/${type}/movie`, {
      params: {
        api_key: API_KEY,
        query: searchKey,
      },
    });
    setMovies(results);
  };

  useEffect(() => {
    fetchMovies(searchKey);
  });

  const renderMovies = () =>
    movies.map((movie) => (
      <div key={movie.id} className="col-sm-6 col-md-4 col-lg-3 movie-card">
        <div className="card">
          <img
            className="card-img-top img-fluid hover"
            src={baseImageUrl + movie.poster_path}
            alt={movie.title}
            onClick={() => props.onShowMovie(movie)}
          />
          <ul className="sci">
            <li>
              <a href="">happy</a>
            </li>
            <li>
              <a href="">birth</a>
            </li>
            <li>
              <a href="">day</a>
            </li>
          </ul>
          {/* <button onClick={() => props.onShowMovie(movie)}>More Info</button> */}
        </div>
      </div>
    ));

  const searchMovies = (e) => {
    e.preventDefault();
    fetchMovies();
  };
  return (
    <div>
      <div
        className={"info"}
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)) ,url(${BACKGROUND_IMAGE_PATH}${selectedMovie.backdrop_path})`,
        }}
      >
        <form onSubmit={searchMovies}>
          <input type={"text"} onChange={(e) => setSearchKey(e.target.value)} />
        </form>
        <div id="movies-index" className="row">
          {renderMovies()}
          {/* {props.movies.map((movie) => (

            <div key={selectedMovie.id} className="col-sm-6 col-md-4 col-lg-3 movie-card">
              <div className="card">
                <img
                  className="card-img-top img-fluid hover"
                  src={baseImageUrl + selectedMovie.poster_path}
                  alt={selectedMovie.title}
                  onClick={() => props.onShowMovie(selectedMovie)}
                />
                <ul className="sci">
                  <li>
                    <a href="">happy</a>
                  </li>
                  <li>
                    <a href="">birth</a>
                  </li>
                  <li>
                    <a href="">day</a>
                  </li>
                </ul>
                <button onClick={() => props.onShowMovie(movie)}>More Info</button>
              </div>
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
}
