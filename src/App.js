import React, {useState, useEffect} from 'react';
function App() {
  
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(()=>{
    console.log(count);
  },[count,count2])

  useEffect(()=>{
    console.log('first rendering');
  },[])
  // 한번만 실행되고 그 이후에는 실행안됨

  console.log("rendering");
  // 이게 제일 먼저 console.log 찍힘
  const increment = ()=>{
    setCount(count+1);
  }

  return (
    <div className="App">
      <h1>kaperrdenden</h1>
      {count}
      <button onClick={increment}>Click</button>
      <button onClick={()=>{setCount2(count2+1)}}>Click1</button>
    </div>
  );
}

export default App;
