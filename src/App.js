import React, {useState, useEffect} from 'react';
import Counter from './components/Counter';
import Movie from './components/Movie';
import {
    BrowserRouter as Router,
    Switch,
    Route,
     
} from 'react-router-dom';


function App() {
  const [movieTitle, setMovieTitle] = useState('');
  const [movieYear, setMovieYear] = useState('');
  const [movies, setMovies] = useState( [
    {title: 'i am dongjae', year: 2001},
    {title: 'i am dongjae2', year: 2002},
    {title: 'i am dongjae3', year: 2003},
  ]);
  useEffect(()=>{
    console.log("render");
  })

  const renderMovies = movies.map(movie =>{
    return(
      <Movie movie={movie} key={movie.title} />
    )
  })
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
const addMovie = (e) =>{
  e.preventDefault();
  setMovies([
    ...movies,
    {
      title: movieTitle,
      year: movieYear,
    }
  ])
  console.log(movieTitle,movieYear);
}
  return (
    <div className='App'>
      <h1>Movie list</h1>
    
      <form onSubmit={addMovie}>
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
      {renderMovies}
      {/* <h1>Dongjaeda</h1>
      <div>
        {renderCondition}
      </div>
    
      <button onClick={toggle}>Toggle</button> */}
      {/* <form onSubmit={(e)=>{
        e.preventDefault();
      }}>

      
      <input 
        placeholder='Username' 
        value={username} 
        onChange={(e)=>{
          setUsername(e.target.value);
        }}/> <br />
      <input 
        placeholder='Password' 
        value={password}
        onChange={(e)=>{
          setPassword(e.target.value);
        }}
        />
         <br />
      <button type='submit'>Login</button>

      </form> */}


    </div>
  );
}

export default App;
