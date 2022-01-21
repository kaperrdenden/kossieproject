import React, {useState, useEffect} from 'react';
import Counter from './components/Counter';
function App() {
  const [buttonName, setButtonName] = useState('클릭');


  return (
    <div className="App">
      <h1>kaperrdenden</h1>

    <Counter click="click"/>
    <Counter click={buttonName}/>
    <Counter />
    <button onClick={()=>{
      setButtonName('click');
    }}>click</button>
  
    </div>
  );
}

export default App;
