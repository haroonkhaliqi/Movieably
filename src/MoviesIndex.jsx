/* eslint-disable react/prop-types */
export function MoviesIndex(props) {
  return (
    <div id="movies-index" className="row">
      {props.movies.map((movie) => (
        <div key={movie.id} className="col-sm-6 col-md-4 col-lg-3 movie-card">
          <div className="card">
            <img
              className="card-img-top img-fluid"
              src={movie.poster}
              alt={movie.title}
              onClick={() => props.onShowMovie(movie)}
            />
            {/* <button onClick={() => props.onShowMovie(movie)}>More Info</button> */}
          </div>
        </div>
      ))}
    </div>
  );
}
