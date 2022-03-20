import React, {useState, useEffect} from 'react';
import Counter from './components/Counter';
import Movie from './components/Movie';
import MovieForm from './components/MovieForm';
import Navbar from './components/Navbar';
import Users from './components/pages/Users';
import Home from './components/pages/Home';
import Movies from './components/pages/Movies';
import {
    BrowserRouter as Router,
    Switch,
    Route,
     
} from 'react-router-dom';



function App() {
 

  
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div className='container'>
          {/* 나는 그냥 container라는 클래스 넣어줬을 뿐인데 
            내부 자식들이 정렬되었다. 부트스트랩 때문인가봄
          */}
          <Switch>
            <Route path="/movies"> 
              <Movies />
            </Route>
            <Route path="/" exact>
            <Home />
          </Route>
            <Route path="/users">
              <Users />
            </Route>
          
          </Switch>
        </div>
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
