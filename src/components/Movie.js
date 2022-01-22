import React, {useState, useEffect} from 'react';

function Movie(props) {


  return (
    <div>
        <div className='movie'>
            <div className='movie-title'>
                {props.movie.title}
                <span className='movie-year' >
                    ({props.movie.year})
                </span>
            </div>
            <div >
                <button onClick={()=>{props.removeMovie(props.movie.id)}}>삭제</button>
            </div>
        </div>
    </div>
  );
}

export default Movie;
