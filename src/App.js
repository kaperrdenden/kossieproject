import React, {useState, useEffect} from 'react';
import Counter from './components/Counter';
import Movie from './components/Movie';
import MovieForm from './components/MovieForm';
import Navbar from './components/Navbar';
import {
    BrowserRouter as Router,
    Switch,
    Route,
     
} from 'react-router-dom';
function App() {


// const [movieTitle,setMovieTitle] = useState('');
// const [movieYear,setMovieYear] = useState('');

const [movies,setMovies] = useState(
  [
 
  ]
);
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

  return (
    <Router>
     <div className="App">
      <Navbar />
     
      <Route path='/movies'>
      <h1>Movie List</h1>
        <MovieForm addMovie={addMovie} />
        {renderMovies} 
     
      </Route>
      <Route path='/users'></Route>
      <Route path='/'></Route>
   
      
   
     </div>
  </Router>
  
  );
}

export default App;
