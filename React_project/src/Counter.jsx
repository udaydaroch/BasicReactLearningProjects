import React, {useState} from 'react';
function Counter() {

  const [count, setCount] = useState(0);
  

  const UpdateIncrement = () => {
    setCount(count+1);
  }

  const UpdateDecrement = () => {
    setCount(count-1);
  }

  const UpdateReset = () => {
    setCount(0);
  }
  return (<div className="counter-container">
    <p className="count-display">{count}</p> 
    <button className="button" onClick={UpdateDecrement}>Decrement</button>
    <button className="button"onClick={UpdateReset}>reset</button>
    <button className="button" onClick={UpdateIncrement}>Increment</button>
   
  </div>);
}

export default Counter