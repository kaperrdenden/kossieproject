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
 
  const [movies, setMovies] = useState( [
 
  ]);
  useEffect(()=>{
    console.log("render");
  })
  const removeMovie = (id) =>{
    setMovies( movies.filter((movie)=>{
      return id !== movie.id;
    }));
    // d
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
      <Movie 
          movie={movie}
          removeMovie={removeMovie}
          key={movie.id} />
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
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Route path="/movies"> 
          <h1>Movie list</h1>
      
          <MovieForm addMovie={addMovie}/>
          {renderMovies}</Route>
        <Route path="/users"></Route>
        <Route path="/"></Route>
       
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
    </Router>
  );
}

export default App;
