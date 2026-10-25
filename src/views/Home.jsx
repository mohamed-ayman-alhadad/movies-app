// Home.jsx
import useFetch from "../hooks/useFetch";
import MovieController from "../Controls/MovieController";
import MovieList from "./MovieList";
import Hero from "./Hero";
import { Loader, ErrorMessage } from "./Status";

function Home() {
  const { data, loading, error } = useFetch(async (signal) => {
    const [popular, nowPlaying] = await Promise.all([
      MovieController.getPopular(signal),
      MovieController.getNowPlaying(signal),
    ]);
    return { popular, nowPlaying };
  }, []);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;

  const [featured, ...popular] = data.popular;

  return (
    <div className="container pb-5">
      <h1 className="text-white">Explore</h1>
      <p className="text-color fs-4">What are you gonna watch today?</p>

      {featured && <Hero movie={featured} />}

      <h2 className="text-white mb-3">Popular</h2>
      <MovieList movies={popular} />

      <h2 className="text-white mt-5 mb-3">New Release</h2>
      <MovieList movies={data.nowPlaying} />
    </div>
  );
}
export default Home;