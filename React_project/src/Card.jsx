import Button from './button.jsx'
function Card () {
  return (
    
    <div> 
      <div className='card'>
        <img className="CardImg" alt="profile pictrue"src="vite.svg"></img> 
        <h1 className="CardTitle">UdayDaroch</h1>
        <p className="cardText">I am Software Engineering student </p>
        <Button/>
      </div>
    </div> 
    
  );
}

export default Card