import React, {useState} from "react";
import MovieForm from '../components/MovieForm';
import Movie from "../components/Movie";
const Movies = () => {

    const [movies,setMovies] = useState([]);
    const removeMovie= (id)=>{

        setMovies(movies.filter(movie=>{
          return id !== movie.id;
        }))
      }
    const renderMovies =  movies.length ? movies.map((movie,i)=>{
        return(
          <Movie
            movie={movie}
            key={movie.id}
            removeMovie={removeMovie}
      
          />
        )
      })
      : '추가된 영화가 없음';
      const addMovie = (movie) =>{
        // e.preventDefault();
        setMovies([
          ...movies,
          // {title:movieTitle, year:movieYear}
          movie,
        ]);
      
        // setMovieTitle('');
        // setMovieYear('');
      };
  
    return(
        <>
            <h1>Movie List</h1>
            <MovieForm addMovie={addMovie} />
            {renderMovies} 
        </>
    )

}

export default Movies;