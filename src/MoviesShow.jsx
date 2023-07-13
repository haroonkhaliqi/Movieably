/* eslint-disable react/prop-types */
export function MoviesShow(props) {
  const handleFavorite = () => {
    const params = new FormData();
    params.append("movie_id", props.movie.id);
    props.onCreateFavorite(params);
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
      <button onClick={handleFavorite}>Add to Favorites</button>
    </div>
  );
}
