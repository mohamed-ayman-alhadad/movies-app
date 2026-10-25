class MovieModal {
  constructor({ id, title, overview, poster_path, backdrop_path, vote_average, release_date }) {
    this.id = id;
    this.title = title;
    this.overview = overview;
    this.poster_path = poster_path;
    this.backdrop_path = backdrop_path;
    this.vote_average = vote_average;
    this.release_date = release_date;
  }
}
export default MovieModal;