import MovieDetailesController from "../Controls/MovieDetailsController";

function Card({ movie, setMovieDetails }) {

    const openMOvieDeytails = async(id) => {
        let Detailes = await MovieDetailesController.getMovieDetails(id) 
        console.log(Detailes);
        
        setMovieDetails(Detailes)
    }

    return (<>
        <img onClick={() => openMOvieDeytails(movie.id)} src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
            style={{ height: '180px', width: '150px', borderRadius: '10px' }} />
    </>);
}

export default Card;