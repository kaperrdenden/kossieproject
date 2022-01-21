import React, {useState} from 'react';
function App() {

  const [username, setUsername] = useState('');
  const [password,setPassword] = useState('');


  const onSubmit = (e)=>{
    console.log('dsa')
    e.preventDefault();
  };

  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <input 
          placeholder='username' 
          value={username}
          onChange={(e)=> setUsername(e.target.value)}
        />
        <br/>

        <input 
          placeholder='Password' 
          value={password}
          onChange={(e)=> setPassword(e.target.value)}
        />
        <br/>
        
      
        <button onClick={onSubmit}>login</button>
      </form>
    </div>
  );
}

export default App;
