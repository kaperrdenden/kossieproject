import React, {useState, useEffect} from 'react';

function Movie(props) {


  return (
    <div>
        <div className='movie'>
            <div className='movie-title'>{props.movie.title}</div>
            <div className='movie-year'>{props.movie.year}</div>
        </div>
    </div>
  );
}

export default Movie;
