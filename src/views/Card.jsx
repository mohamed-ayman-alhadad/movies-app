// Card.jsx  (sidebar recommendations)
import { Link } from "react-router-dom";
import Poster from "./Poster";

function Card({ movie }) {
  return (
    <Link to={`/details/${movie.id}`} className="d-flex gap-3 text-decoration-none mb-3">
      <div className="flex-shrink-0 rounded-3 overflow-hidden" style={{ width: 70, height: 100 }}>
        <Poster path={movie.poster_path} alt={movie.title} size="w185" />
      </div>
      <div className="overflow-hidden">
        <h6 className="text-white mb-1">{movie.title}</h6>
        <small className="text-color">
          ★ {movie.vote_average?.toFixed(1)} · {movie.release_date?.slice(0, 4)}
        </small>
      </div>
    </Link>
  );
}
export default Card;