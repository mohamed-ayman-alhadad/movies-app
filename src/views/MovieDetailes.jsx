import { useLocation, useParams } from "react-router-dom";
import MovieDetailesController from "../Controls/MovieDetailsController";
import { useEffect, useState } from "react";
import Test from "./Card";
import youtube from '../images/youtube.png'
import Card from "./Card";

function MovieDetailes() {
  const { id} = useParams();
  console.log(id);
  

  const [movie_Details, setMovieDetails] = useState(null);
  const [recommendedMovies, setRecommendedMovies] = useState(null)
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchDetails(id);
    fetchRecommendedMovies(id)
  }, [id])
  const fetchDetails = async (id) => {
    try {
      const data = await MovieDetailesController.getMovieDetails(id);
      console.log(data);
      setMovieDetails(data);

    } catch (error) {
      console.log(error);
      setError(error);
    }

  }

  const fetchRecommendedMovies = async (id) => {
    try {
      const data = await MovieDetailesController.getRecommendedMovies(id);
      console.log(data);
      
      setRecommendedMovies(data);


    } catch (error) {
      console.log(error);

    }
  }


  if (!movie_Details) {
    <h1>Loading...</h1>
  }
  if (error) {
    <h1>{error}</h1>
    console.log(error);

  }

  return <>
    {movie_Details &&
      <div className="container d-flex gap-4">

        <div className="w-75">
          <div className="text-white">
            <h1 className="mb-5">{movie_Details.original_title}</h1>
            <iframe className="mb-5 w-100 rounded-4" style={{ height: '450px' }}
              src={`https://www.youtube.com/embed/${movie_Details.videos.results[0].key}`}></iframe>

            <div className="d-flex gap-5 mb-5">
              <img src={`https://image.tmdb.org/t/p/w500/${movie_Details.poster_path}`}
                style={{ width: '280px', height: '380px', borderRadius: '10px' }} />
              <div className="d-flex flex-column">
                <h4>Type :</h4>
                <p className="text-secondary">TV</p>
                <h4>Status :</h4>
                <p className="text-secondary">Ongoing</p>
                <h4>Studio :</h4>
                <p className="text-secondary">Toei Animation</p>
                <h4>Duration :</h4>
                <p className="text-secondary">{movie_Details.runtime} Min.</p>
                <h4>Genres :</h4>
                <div className="d-flex gap-2 text-secondary">
                  {movie_Details.genres.map((genre) => <p key={genre.id}>{genre.name}</p>)}
                </div>
              </div>
            </div>
            <h4>Sypnosis :</h4>
            <p className="text-secondary">{movie_Details.overview}{movie_Details.overview}</p>
          </div>
        </div>

        <div className="w-25 " >
          <h1 className="text-white mb-5">Popular Anime</h1>
          <div className="overflow-auto"style={{ height:'90vh', scrollbarWidth: 'none'  }}>
          {recommendedMovies &&
            <div className="d-flex flex-wrap gap-3 w-100">
              {recommendedMovies.map((movie) => <Card key={movie.id} movie={movie} 
              setMovieDetails={setMovieDetails} />)}

            </div>
          }
          </div>
        </div>
      </div>
    }
  </>;
}


export default MovieDetailes;

