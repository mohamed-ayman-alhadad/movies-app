import React from "react";
import MovieItem from "./MovieItem";
import '../App.css'


function MovieList(props) {
    
    return (
        <div className="d-flex overflow-x-auto overflow-y-hidden no-scrollbar">
            {props.movies.map(movie =>  <MovieItem  key={movie.id} movie={movie} />)}
        </div>
    )
}



export default MovieList;