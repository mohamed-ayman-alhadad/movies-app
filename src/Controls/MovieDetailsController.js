import api from "./api";

class MovieDetailesController {
  static async getMovieDetails(id, signal) {
    const { data } = await api.get(`/movie/${id}`, {
      params: { append_to_response: "videos" },
      signal,
    });
    return data;
  }

  static async getRecommendedMovies(id, signal) {
    const { data } = await api.get(`/movie/${id}/recommendations`, {
      params: { page: 1 },
      signal,
    });
    return data.results;
  }
}
export default MovieDetailesController;