import '../App.css'
import { useNavigate } from "react-router-dom";

const MovieItem = ({ movie }) => {
    let navigation = useNavigate()
    const openDetails = (id) => {
        navigation(`details/${id}`)
        console.log(id);

    }

    return (
        <>
            <div onClick={()=>openDetails(movie.id)} className="col-2 imgCard-h mx-3 text-center  ">
                <div className="rounded-4 w-100 img-h  position-relative  overflow-hidden mb-3 "
                    style={{
                        backgroundSize: 'cover',
                        backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.poster_path})`,

                    }}>

                    <div className="overlay opacity-50 position-absolute w-100 h-100 top-0 start-0 " style={{ background: 'linear-gradient(to top, #192026, white)' }}></div>
                    <p className="position-absolute bottom-0 left-75 text-white">Episode 07</p>
                </div>
                <h4 className="text-white">{movie.title}</h4>
            </div>
        </>
    )
}
export default MovieItem