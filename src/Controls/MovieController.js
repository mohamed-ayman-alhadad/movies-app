import MovieModal from "../modals/MovieModal";
import axios from "axios";

class MovieController {

    static async getMovies() {

        try {
            const res = await axios.get("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7")
            return res.data.results.map(movie => new MovieModal(movie.id,movie.title, movie.overview, movie.poster_path, movie.backdrop_path))
        } catch (error) {
            console.log(error);
        }

    }
}
export default MovieController