import axios from "axios";
import Detailes from "../modals/Details";

class MovieDetailesController {
    static async getMovieDetails(id) {
        let {data} = await axios.get(`https://api.themoviedb.org/3/movie/${id}?append_to_response=videos`
       , {
            headers: {
                'Content-Type': 'application/json',
                Authorization:' Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Yzk4YmM1ZDYxMmE0OTMxNGUwMDM1N2U5ZTI4MDY0MyIsIm5iZiI6MTczNzQ5ODgwMi4zODYsInN1YiI6IjY3OTAyMGIyYTVhOGU2MDFhMTZiNDZiMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MXAOp91Vs_J0ylxQSGPxwU5HfqZtjToKEwBzEhgV0VQ'
              }
        }
    );
        console.log(data,"jbjcjkcbkejb");
        
        let movie={}
        return movie = new Detailes(data.id,
            data.original_title,
            data.overview,
            data.backdrop_path,
            data.poster_path,
            data.genres,
            data.runtime,
            data.videos
        )
    }
    static async getRecommendedMovies(id) {
        let {data} = await axios.get(`https://api.themoviedb.org/3/movie/${id}/recommendations?language=en-US&page=1`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization : 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Yzk4YmM1ZDYxMmE0OTMxNGUwMDM1N2U5ZTI4MDY0MyIsIm5iZiI6MTczNzQ5ODgwMi4zODYsInN1YiI6IjY3OTAyMGIyYTVhOGU2MDFhMTZiNDZiMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MXAOp91Vs_J0ylxQSGPxwU5HfqZtjToKEwBzEhgV0VQ'
                }
            }
        );
        console.log(data.results);
         
        return data.results      
    }
}

export default MovieDetailesController;