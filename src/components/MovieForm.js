import React, { useRef, useState } from "react";
import InputField from "./InputField";
import Movies from "./pages/Movies";

const MovieForm = (props) => {
    const [movieTitle, setMovieTitle] = useState('');
    const [movieYear, setMovieYear] = useState('');
    const [titleError, setTitleError] = useState('');
    const [yearError, setYearError] = useState(''); 
 
    const resetForm = () => {
        setMovieTitle('');
        setMovieYear('');
    };

    const validateForm = () => {
        let validated = true;
        resetErrors();
        if (!movieTitle){
            setTitleError('영화제목을 넣어주세요');
            validated = false;
        }
        if (!movieYear) {
            setYearError('개봉년도를 넣어주세요');
            validated = false;       
        }
        return validated;
    };

    const resetErrors = () => {
        setTitleError('');
        setYearError('');
    }

    const onSubmit = (e) =>{
    e.preventDefault();
    for (let i=0; i<props.movies.length; i++){
        if (props.movies[0].title === movieTitle){
            alert('이미 존재하는 영화입니다.');
            return;
        }
        
    }
    console.log('her');
    if (validateForm()){
        props.addMovie({
            id:Date.now(),
        //   Date.now()로 임의의 유니크한 id만들기
            title:movieTitle,
            year:movieYear,
        })
        resetErrors();
        resetForm();
        
        // 영화가 추가될 때만 reset을할 수있게 한다.
    }
    
    //   setMovies([
    //     ...movies,
    //     {
    //       title: movieTitle,
    //       year: movieYear,
    //     }])
 
    console.log(movieTitle,movieYear);
    }
    return (
        <div className='App'>
        
            
            <form onSubmit={onSubmit}>
                <InputField 
                    type="text"
                    value={movieTitle}
                    placeholder="영화제목"
                    onChange={ e => setMovieTitle(e.target.value) }
                    errorMessage={titleError}
                    
                />
                
                <InputField 
                    type="number"
                    value={movieYear}
                    placeholder="개봉년도"
                    onChange={ e => setMovieYear(e.target.value) }
                    errorMessage={yearError}
                />
                    {/* <input 
                    type="number" 
                    value={movieYear}
                    placeholder="개봉년도"
                    onChange={e => setMovieYear(e.target.value)}
                    /><br />
                    <div style={{color: 'red'}}>{yearError}</div> */}
                    <button>영화추가</button>
            </form>
        </div>
  );
}

export default MovieForm;