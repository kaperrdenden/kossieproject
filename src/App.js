import React, {useState, useEffect} from 'react';
import Counter from './components/Counter';

import {
    BrowserRouter as Router,
    Switch,
    Route,
     
} from 'react-router-dom';


function App() {

// const [movieTitle,setMovieTitle] = useState('');
// const [movieYear,setMovieYear] = useState('');
// state를 따로 빼놓지 않고 관리했을 경우
// return 내부에 있는 것들은 JSX. html, js도 아니다.        
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  // const onSubmit = ()=>{
  //   alert('submitted');
  // }

  return (
    <div className='App'>
      <Counter />
      <Counter />
      <Counter />
     
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
