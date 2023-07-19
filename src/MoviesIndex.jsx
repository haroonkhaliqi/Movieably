/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import axios from "axios";

export function MoviesIndex(props) {
  const baseImageUrl = "https://image.tmdb.org/t/p/original";
  const API_URL = "https://api.themoviedb.org/3";
  const BACKGROUND_IMAGE_PATH = "https://image.tmdb.org/t/p/w1280/";
  const API_KEY = "b198f69361835edbd3995238db58fcea";
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
          <div className="wrapper">
            <div className="card" onClick={() => props.onShowMovie(movie)}>
              <img
                className="card-img-top img-fluid hover"
                src={baseImageUrl + movie.poster_path}
                alt={movie.title}
                onClick={() => props.onShowMovie(movie)}
              />
              <div className="descriptions">
                <h1>{movie.title}</h1>
                {/* <area
                  className="image"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Star_icon_stylized.svg/1200px-Star_icon_stylized.svg.png"
                ></area> */}
                <span className="align-bottom">
                  <p className="text-end">{movie.vote_average} / 10</p>
                </span>
              </div>
              {/* <button onClick={() => props.onShowMovie(movie)}>More Info</button> */}
            </div>
          </div>
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
          <div className="d-flex justify-content-end">
            <div className="search-wrapper p-2" search-wrapper>
              <input
                type={"text"}
                name="search"
                aria-label="search movies"
                placeholder="Search any movies..."
                className="search-field"
                autocomplete="off"
                search-field
                onChange={(e) => setSearchKey(e.target.value)}
              />
              <img
                src="https://raw.githubusercontent.com/Shivam171/Tvflix/main/assets/images/search.png"
                alt="search"
                className="leading-icon"
                width="24"
                height="24"
              />
            </div>
          </div>
        </form>
        <div id="movies-index" className="row">
          {renderMovies()}
        </div>
      </div>
    </div>
  );
}
