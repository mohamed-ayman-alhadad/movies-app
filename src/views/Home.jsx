// import { useOutletContext } from "react-router-dom";
import MovieList from "./MovieList";
import { useEffect, useState } from "react";
import MovieController from "../Controls/MovieController";

function Home() {
  // const movies =useOutletContext()
  const [movies, setMovies] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setErorr] = useState(null);
  useEffect(() => {
    fetchMovies();
  }, [])

  const fetchMovies = async () => {
    try {
      const moviesList = await MovieController.getMovies();
      setMovies(moviesList)
      console.log(moviesList);

    } catch (error) {
      console.log(error);
      setLoading(false)

      setErorr(error)
    } finally {
      setLoading(false)

    }
  }




  if (error) {
    return <h1>{error}</h1>

  }

  if (isLoading) {
    return <h1>Loading...</h1>

  }
  return <>
    <div className="container">
      <h1 className="text-white">Explore</h1>
      <p className="text-color fs-4">What are you gonna watch today ?</p>
      <div className="w-100 rounded-4 backdrop-h position-relative overflow-hidden mb-5"
        style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movies[0].backdrop_path})`, backgroundSize: 'cover' }}>
        <div className="bg-white position-absolute w-100 h-100 opacity-50" style={{ background: 'linear-gradient(to right, #192026, white)' }}></div>
        <div className="decs text-white position-absolute top-50 left-25 w-50">
          <h1 className="mb-4">{movies[0].title}</h1>
          <p>{movies[0].overview}</p>
        </div>
      </div>
      <h1 className="text-white">New Realease</h1>
      <MovieList movies={movies} />
    </div>
  </>

}
export default Home;