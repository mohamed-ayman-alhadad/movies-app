// MovieList.jsx
import MovieItem from "./MovieItem";

function MovieList({ movies }) {
  if (!movies.length) return <p className="text-color">Nothing to show.</p>;
  return (
    <div className="d-flex gap-3 overflow-x-auto pb-2 no-scrollbar">
      {movies.map((movie) => <MovieItem key={movie.id} movie={movie} />)}
    </div>
  );
}
export default MovieList;