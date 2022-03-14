import React, {useState, useEffect} from 'react';


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

  const onSubmit = ()=>{
    alert('submitted');
  }
  const onKeyUp = (e)=>{
    if(e.keyCode === 13){

      alert('submitted');
    }
  }
  return (
    <div className='App'>
      <input onKeyUp={onKeyUp}/>
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
}

export default App;
