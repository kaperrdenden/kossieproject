import React, { useState } from 'react'; 

const Counter = (props) => {
    const [count, setCount] = useState(0);
    
    const increment = () => {
      setCount(count+1);
    }
    const clickString = props.click || 'Click!';
    // props.click 에 값이 없으면 || 뒤에 오는 'CLick'이 반환된다.
      return (
        
          <button 
            onClick={increment}>
            {clickString}
            Click {count} 
          </button>
        
      );
};

export default Counter;