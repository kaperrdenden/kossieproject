import React, {useState} from "react";
import Movie from "../Movie";
import MovieForm from "../MovieForm";


const Movies = () => {
    const [movies, setMovies] = useState( [
 
    ]);

    const removeMovie = (id) =>{
        setMovies( movies.filter((movie)=>{
          return id !== movie.id;
        }));
       
        // const coppiedArray = [...movies];
        // for (let i=0; i<movies.length; i++){
        //   if (movies[i].id==id){
        //     coppiedArray.splice(i, 1);
        //   }
        // }
        // setMovies(coppiedArray);
      }
    const renderMovies = movies.length ? movies.map(movie =>{
        return(
            <div key={movie.id}>
            <Movie 
                movie={movie}
                removeMovie={removeMovie}
                key={movie.id} />
            <button>전체삭제</button>
          </div>
        )
      }) 
      : '추가된 영화 없음';
      // const [condition, setCondition] = useState(false);
      // const toggle = () => {
      //   setCondition(!condition);
      // }
      // useEffect(()=>{
      //   console.log(condition)
      // },[condition])
      // const renderCondition = condition 
      // ? 'true'
      // : 'False'
    
      // const [buttonName, setButtonname]=useState('클릭');
      // const clickButton = ()=>{
      //   setButtonname('click');
      // }
    // const [movieTitle,setMovieTitle] = useState('');
    // const [movieYear,setMovieYear] = useState('');
    // state를 따로 빼놓지 않고 관리했을 경우
    // return 내부에 있는 것들은 JSX. html, js도 아니다.        
      // const [username, setUsername] = useState('');
      // const [password, setPassword] = useState('');
      // const onSubmit = ()=>{
      //   alert('submitted');
      // }
    const addMovie = (movie) =>{
      // e.preventDefault();
      setMovies([
        ...movies, 
        movie,
      ])
        
      // console.log(movieTitle,movieYear);
    }
    return(
        <>
          <h1>Movie list</h1>
          
          <MovieForm
            addMovie={addMovie}
            movies={movies}
            />
          {renderMovies}
         
        </>
    )
  
}   

export default Movies;