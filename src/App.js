import React, {useState, useEffect} from 'react';
import Counter from './components/Counter';
import Movie from './components/Movie';
import MovieForm from './components/MovieForm';

function App() {


// const [movieTitle,setMovieTitle] = useState('');
// const [movieYear,setMovieYear] = useState('');

const [movies,setMovies] = useState(
  [
    {title:'dwdqw odqwdq1', year: 2001,},
    {title:'dwdqw odqwdq2', year: 2002,},
    {title:'dwdqw odqwdq3', year: 2003,},
    {title:'dwdqw odqwdq4', year: 2004,},
  ]
);

  
const renderMovies =   movies.map((movie,i)=>{
  return(
    <Movie movie={movie} key={i} />
  )
})
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

  return (
    <div className="App">

      <h1>Movie List</h1>

      <MovieForm addMovie={addMovie}/>
     {
       renderMovies
     }
   
 
  
    </div>
  );
}

export default App;
