import React, {useState, useEffect} from 'react';
import Counter from './components/Counter';
function App() {


const movies = [
  {title:'dwdqw odqwdq1', year: 2001,},
  {title:'dwdqw odqwdq2', year: 2002,},
  {title:'dwdqw odqwdq3', year: 2003,},
  {title:'dwdqw odqwdq4', year: 2004,},
]
  
const renderMovies = movies.map((movie,i)=>{
  return (
    <div className='movie' key={i}>
    <div className='movie-title'>{movie.title}</div>
    <div className='movie-year'>{movies.year}</div>
  </div>
  )
})
  return (
    <div className="App">
      <h1>Movie List</h1>
    {renderMovies}
 
  
    </div>
  );
}

export default App;
