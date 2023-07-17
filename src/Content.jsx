import axios from "axios";
import { useState, useEffect } from "react";
import { MoviesIndex } from "./MoviesIndex";
import { MoviesShow } from "./MoviesShow";
import { Modal } from "./Modal";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./Logout";
import { Routes, Route } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

export function Content() {
  const [movies, setMovies] = useState([]);
  const [isMoviesShowVisible, setIsMovieshowVisible] = useState(false);
  const [currentMovie, setCurrentMovie] = useState({});
  // const navigate = useNavigate();

  const handleIndexMovies = () => {
    console.log("handleIndexMovies");
    axios.get("http://localhost:3000/movies.json").then((response) => {
      console.log(response.data);
      setMovies(response.data);
    });
  };

  const handleShowMovie = (movie) => {
    console.log("handleShowMovie", movie);
    setIsMovieshowVisible(true);
    setCurrentMovie(movie);
  };

  const handleCreateFavorite = (params) => {
    console.log("handleCreateFavorite", params);
    axios.post("http://localhost:3000/favorites.json", params).then((response) => {
      console.log(response.data);
    });
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsMovieshowVisible(false);
  };

  useEffect(handleIndexMovies, []);

  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/logout" element={<LogoutLink />} />
        <Route path="/" element={<MoviesIndex movies={movies} onShowMovie={handleShowMovie} />} />
      </Routes>
      <Modal show={isMoviesShowVisible} onClose={handleClose}>
        <MoviesShow movie={currentMovie} onCreateFavorite={handleCreateFavorite} />
      </Modal>
    </div>
  );
}
