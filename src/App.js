import React, {useState, useEffect} from 'react';
import Counter from './components/Counter';
function App() {
  
  // const [count, setCount] = useState(0);
  // const [count1, setCount1] = useState(0);
  // const [count2, setCount2] = useState(0);
  
  // const increment = ()=>{
  //   setCount(count+1);
  // }
  // const increment1 = ()=>{
  //   setCount1(count1+1);
  // }
  // const increment2 = ()=>{
  //   setCount2(count1+2);
  // }
  return (
    <div className="App">
      <h1>kaperrdenden</h1>

    <Counter/>
    <Counter/>
    <Counter/>
  
    </div>
  );
}

export default App;
