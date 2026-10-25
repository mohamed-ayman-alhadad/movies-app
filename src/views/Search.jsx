import { useSearchParams } from "react-router-dom";
import MovieController from "../Controls/MovieController";
import useFetch from "../hooks/useFetch";
import MovieItem from "./MovieItem";
import { Loader, ErrorMessage } from "./Status";

function Search() {
  const [params] = useSearchParams();
  const q = params.get("q") ?? "";

  const { data: movies, loading, error } = useFetch(
    (signal) => MovieController.searchMovies(q, signal), [q]);

  return (
    <div className="container pb-5">
      <h2 className="text-white mb-4">Results for “{q}”</h2>
      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {movies && !movies.length && <p className="text-color">No movies found.</p>}
      <div className="d-flex flex-wrap gap-3">
        {movies?.map((m) => <MovieItem key={m.id} movie={m} />)}
      </div>
    </div>
  );
}
export default Search;