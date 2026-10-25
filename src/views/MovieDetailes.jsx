import { useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieDetailesController from "../Controls/MovieDetailsController";
import useFetch from "../hooks/useFetch";
import Card from "./Card";
import Poster from "./Poster";
import { Loader, ErrorMessage } from "./Status";

function MovieDetailes() {
  const { id } = useParams();

  const { data: movie, loading, error } = useFetch(
    (signal) => MovieDetailesController.getMovieDetails(id, signal), [id]);
  const { data: recommended } = useFetch(
    (signal) => MovieDetailesController.getRecommendedMovies(id, signal), [id]);

  useEffect(() => { window.scrollTo(0, 0); }, [id]);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;
  if (!movie) return null;

  const videos = movie.videos?.results ?? [];
  const trailer =
    videos.find((v) => v.site === "YouTube" && v.type === "Trailer") ??
    videos.find((v) => v.site === "YouTube");

  const info = [
    ["Release date", movie.release_date],
    ["Status", movie.status],
    ["Studio", movie.production_companies?.[0]?.name],
    ["Duration", movie.runtime ? `${movie.runtime} min` : null],
    ["Rating", movie.vote_average ? `★ ${movie.vote_average.toFixed(1)}` : null],
  ].filter(([, value]) => value);

  return (
    <div className="container pb-5">
      <div className="row g-4">
        <div className="col-lg-9 text-white">
          <h1 className="mb-1">{movie.title}</h1>
          {movie.tagline && <p className="text-color fst-italic mb-4">{movie.tagline}</p>}

          {trailer ? (
            <div className="ratio ratio-16x9 mb-5">
              <iframe
                className="rounded-4"
                title={`${movie.title} trailer`}
                src={`https://www.youtube.com/embed/${trailer.key}`}
                allowFullScreen
              />
            </div>
          ) : (
            <p className="text-color mb-5">No trailer available.</p>
          )}

          <div className="row g-4 mb-5">
            <div className="col-md-4">
              <div className="rounded-3 overflow-hidden" style={{ aspectRatio: "2 / 3" }}>
                <Poster path={movie.poster_path} alt={`${movie.title} poster`} />
              </div>
            </div>
            <div className="col-md-8">
              <dl>
                {info.map(([label, value]) => (
                  <div key={label} className="mb-3">
                    <dt>{label}</dt>
                    <dd className="text-secondary mb-0">{value}</dd>
                  </div>
                ))}
              </dl>
              <div className="d-flex flex-wrap gap-2">
                {movie.genres.map((g) => (
                  <span key={g.id} className="badge rounded-pill bg-secondary">{g.name}</span>
                ))}
              </div>
            </div>
          </div>

          <h4>Synopsis</h4>
          <p className="text-secondary">{movie.overview || "No synopsis available."}</p>
        </div>

        <aside className="col-lg-3">
          <h2 className="text-white mb-4 fs-4">You may also like</h2>
          <div className="sidebar-scroll no-scrollbar">
            {recommended?.length
              ? recommended.map((m) => <Card key={m.id} movie={m} />)
              : <p className="text-color">No recommendations.</p>}
          </div>
        </aside>
      </div>
    </div>
  );
}
export default MovieDetailes;