// Hero.jsx
import { Link } from "react-router-dom";
import { imageUrl } from "../Controls/api";

function Hero({ movie }) {
  const bg = imageUrl(movie.backdrop_path, "w1280");
  return (
    <div
      className="hero rounded-4 position-relative overflow-hidden mb-5"
      style={bg ? { backgroundImage: `url(${bg})` } : undefined}
    >
      <div className="hero-content text-white position-absolute top-50 translate-middle-y ms-4 ms-md-5">
        <h1 className="mb-3">{movie.title}</h1>
        <p className="line-clamp-3">{movie.overview}</p>
        <Link to={`/details/${movie.id}`} className="btn btn-light rounded-pill px-4">
          View details
        </Link>
      </div>
    </div>
  );
}
export default Hero;