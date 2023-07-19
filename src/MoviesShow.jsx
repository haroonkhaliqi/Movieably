/* eslint-disable react/prop-types */
import axios from "axios";
import { useState, useEffect } from "react";

export function MoviesShow(props) {
  const baseImageUrl = "https://image.tmdb.org/t/p/original";
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavorite = () => {
    const params = new FormData();
    params.append("movie_id", props.movie.id);
    props.onCreateFavorite(params);
    setIsFavorite();
  };

  const toggleFavorite = (event) => {
    event.stopPropagation();

    if (isFavorite) {
      removeFromFavorites();
    } else {
      addToFavorites();
    }
  };

  const addToFavorites = () => {
    handleFavorite();
    setIsFavorite(true);
  };

  const removeFromFavorites = () => {
    axios
      .delete(`http://localhost:3000/favorites/${props.movie.id}.json`)
      .then(() => {
        setIsFavorite(false);
      })
      .catch((error) => {
        console.error("Couldn't remove from favorites", error);
      });
  };

  const TrailerLink = "https://www.youtube.com/results?search_query=" + props.movie.title + "trailer";
  const MovieLink = "https://www.google.com/search?q=watch+" + props.movie.title;

  return (
    <div className="movie-card-container">
      <div className="image-container">
        <div className="bg-image" style={{ backgroundImage: `url(${baseImageUrl + props.movie.poster_path})` }} />
      </div>
      <div className="movie-info">
        <div>
          <h1>{props.movie.title}</h1>
          <small>Released Date: {props.movie.release_date}</small>
        </div>
        <h4>Rating: {props.movie.vote_average} / 10</h4>
        <p>{props.movie.overview && props.movie.overview.substr(0, 350)}</p>
        {/* <div className="tags-container">
          {props.movie.genre_ids && props.movie.genre_ids.split(", ").map((g) => <span>{g}</span>)}
        </div> */}
        {/* <button className="fav-btn" onClick={toggleFavorite}>
          {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
        </button>

        <button className="fav-btn">Where to watch</button> */}
        {/* <div class="container"> */}
        <div className="row align-items-center">
          <div className="buttons">
            <button className="one" onClick={toggleFavorite}>
              {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
            </button>
            <a href={TrailerLink}>
              <button className="two">
                Watch <b>Trailer</b>
              </button>
            </a>
            <a href={MovieLink}>
              <button className="three">
                WhereTo <b>Watch</b>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
