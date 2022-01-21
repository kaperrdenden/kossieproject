import { useState } from "react";


const Counter = (props) =>{
    const [count, setCount] = useState(0)
    
    const increment = ()=>{
      setCount(count+1);
    }
    const clickString = props.click || 'Click';
    // 만약 props.click이 있으면 해당 값이 clickString에 반환되고 없으면 'Click'이 반환된다
    return (
      <div className="App">
       

        {count}<button onClick={increment}>{clickString}</button>
  
        <br />
  
    

      </div>
    );

}

export default Counter;