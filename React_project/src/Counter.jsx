import React, {useState} from 'react';
function Counter() {

  const [count, setCount] = useState(0);
  

  const UpdateIncrement = () => {
    setCount(count+1);
    // update fucntions for when the values are needed to be chnaged like + 3 times. 
    // setCount ( c => c + 1);
    // or setCount ( prevCount => prevCount + 1)
    // Take the prending state to calculate Next State.
    // react puts your updater function in a query ( waiting in a line) 
    // During the next render, it will call them in the same order. 
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