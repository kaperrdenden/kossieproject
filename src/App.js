import React, {useState, useEffect} from 'react';
import Counter from './components/Counter';
import Movie from './components/Movie';
import MovieForm from './components/MovieForm';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Movies from './pages/Movies';
import routes from './routes';


import {
    BrowserRouter as Router,
    Switch,
    Route,
     
} from 'react-router-dom';

import Users from './pages/Users';
function App() {


// const [movieTitle,setMovieTitle] = useState('');
// const [movieYear,setMovieYear] = useState('');



  


  return (
    <Router>
     <div className="App">
      <Navbar />
      <div className='container'>
        {routes.map(route=>{
          return(
            <Route key={route.path} path={route.path} exact>
                <route.component />
            </Route>
          )
        })}
        {/* <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/movies' exact>
          <Movies />
        </Route>
        <Route path='/users' exact>
          <Users />
        </Route> */}
    
       </div>
      
   
     </div>
  </Router>
  
  );
}

export default App;
