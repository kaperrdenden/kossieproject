import React, {useState, useEffect} from 'react';
import Counter from './components/Counter';
function App() {
 
  
  const [condition, setCondition] = useState(false);
  
  const toggle = ()=>{
    setCondition(!condition);
  }
  useEffect(()=>{
    console.log(condition);
  },[condition])

  const renderCondition = condition === true
  ?' True'
  :  'False'

  return (
    <div className="App">
      <h1>kaperrdenden</h1>

      <div>
      {renderCondition}
      </div>
      <button onClick={toggle}>Toggle</button>
    

  
    </div>
  );
}

export default App;
