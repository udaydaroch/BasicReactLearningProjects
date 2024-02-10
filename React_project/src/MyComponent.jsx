import React, {useState} from 'react'
function MyComponent() {
  const [name, setName] = useState("Guest");
  const [age, setAge]  = useState(1);
  const [isEmployed, setIsEmployed] = useState(false);
  const updateName = () => {
  setName("Uday");
  }
  const updateAge = () => {
    setAge(age+1);
    }
    const toggleIsEmployedStatus = () => {
      setIsEmployed(!isEmployed);
    }
  return (<div>
    <p>Name: {name}</p>
    <button onClick={updateName}>Set Name</button>

    <p>Age: {age}</p>
    <button onClick={updateAge}>Set age</button>
    <p>status: {isEmployed ? "yes": "No"}</p>
    <button onClick={toggleIsEmployedStatus}>Set status</button>
  </div>)
}

export default MyComponent