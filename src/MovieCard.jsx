/* eslint-disable react/prop-types */
import axios from "axios";
import { useState, useEffect } from "react";

export function MovieCard(props) {
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
      .delete(`http://localhost:3000/favorites/${props.currentMovie.id}.json`)
      .then(() => {
        setIsFavorite(false);
      })
      .catch((error) => {
        console.error("Couldn't remove from favorites", error);
      });
  };

  return (
    <div>
      <h1>{props.movie.title}</h1>
      <h4>Directed by {props.movie.director}</h4>
      <p>Writer: {props.movie.writer}</p>
      {/* <img src={props.movie.poster} /> */}
      <p>Rated {props.movie.rated}</p>
      <p>Release Date: {props.movie.released}</p>
      <p>Runtime: {props.movie.runtime}</p>
      <p>Genre: {props.movie.genre}</p>
      <p>Actors: {props.movie.actors}</p>
      <p>Plot: {props.movie.plot}</p>
      <p>Langauge: {props.movie.langauge}</p>
      <p>Country: {props.movie.country}</p>
      <p>Awards: {props.movie.awards}</p>
      <button onClick={toggleFavorite}>{isFavorite ? "Remove from Favorites" : "Add to Favorites"}</button>
    </div>
  );
}
