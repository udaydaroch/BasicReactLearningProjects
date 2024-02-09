function Button() {
  // example 1 
  //const handleClick2= (name) => console.log(`${name} stop clicking me`);
  //return(<button onClick={() => handleClick2("Uday")}>Click me</button>);
  
  // example 2 
  /* let count = 0;
  const handleClick = (name) => {
    if(count < 3) {
      count++;
      console.log(`${name} you clicked me ${count} times`);
    } else {
      console.log(`${name} stop clicking me!`);
    }
  };

  return (<button onClick={() =>handleClick('Uday')}>Click me</button>) */

  //example 3 
  const handleClick = (e) => e.target.textContent = "Ouch";
  return (<button onClick = {(e)=> handleClick(e)}>Click me</button>) // onDoubleClick
}

export default Button