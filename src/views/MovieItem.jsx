// MovieItem.jsx
import { Link } from "react-router-dom";
import Poster from "./Poster";

const MovieItem = ({ movie }) => (
  <Link to={`/details/${movie.id}`} className="movie-item text-decoration-none flex-shrink-0">
    <div className="movie-poster rounded-4 position-relative overflow-hidden mb-2">
      <Poster path={movie.poster_path} alt={movie.title} />
      <div className="overlay position-absolute top-0 start-0 w-100 h-100" />
      {movie.vote_average > 0 && (
        <span className="badge bg-dark position-absolute bottom-0 start-0 m-2">
          ★ {movie.vote_average.toFixed(1)}
        </span>
      )}
    </div>
    <h6 className="text-white text-truncate mb-0">{movie.title}</h6>
    <small className="text-color">{movie.release_date?.slice(0, 4)}</small>
  </Link>
);
export default MovieItem;