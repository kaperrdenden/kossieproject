import { useState } from "react";


const Counter = () =>{
    const [count, setCount] = useState(0)
    
    const increment = ()=>{
      setCount(count+1);
    }
 
    return (
      <div className="App">
       

        {count}<button onClick={increment}>Click</button>
  
        <br />
  
    

      </div>
    );

}

export default Counter;