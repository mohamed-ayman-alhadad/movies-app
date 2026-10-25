import api from "./api";
import MovieModal from "../modals/MovieModal";

const toModels = (results) => results.map((m) => new MovieModal(m));

class MovieController {
  static async getPopular(signal) {
    const { data } = await api.get("/movie/popular", { signal });
    return toModels(data.results);
  }

  static async getNowPlaying(signal) {
    const { data } = await api.get("/movie/now_playing", { signal });
    return toModels(data.results);
  }

  static async searchMovies(query, signal) {
    if (!query.trim()) return [];
    const { data } = await api.get("/search/movie", { params: { query }, signal });
    return toModels(data.results);
  }
}
export default MovieController;