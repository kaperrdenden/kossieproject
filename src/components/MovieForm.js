import React, { useState } from "react";


const MovieForm = () => {
    const [movieTitle, setMovieTitle] = useState('');
  const [movieYear, setMovieYear] = useState('');
    


const onSubmit = (e) =>{
  e.preventDefault();
  setMovies([
    ...movies,
    {
      title: movieTitle,
      year: movieYear,
    }])
    setMovieTitle('');
    setMovieYear('');
  console.log(movieTitle,movieYear);
}
  return (
    <div className='App'>
      <h1>Movie list</h1>
    
      <form onSubmit={onSubmit}>
        <input 
          type="text"
          value={movieTitle}
          placeholder="영화제목"
          onChange={e => setMovieTitle(e.target.value)}
        /><br />
        <input 
          type="text" 
          value={movieYear}
          placeholder="개봉년도"
          onChange={e => setMovieYear(e.target.value)}
        /><br />
        <button>영화추가</button>
      </form>
      </div>
  );
}

export default MovieForm;