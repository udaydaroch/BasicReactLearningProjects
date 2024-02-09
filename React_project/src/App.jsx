
import Card from './Card.jsx'
import Header from './Header.jsx'
import Footer from './footer.jsx'
import Food from './food.jsx'
import Student from './Student.jsx'
import UserGreeting from './userGreeting.jsx'
import List from './List.jsx'
import Button from './Button2.jsx'
import ProfilePicture from './vitapicture.jsx'
function App() {

// basic card generation using the card module.
/*  const repeatCount = 10;
  const repeatedObjects = new Array(repeatCount).fill().map((_, index) => (
    <div className="row">
      <Card/>
    </div>
  ));

  return (
  
    <div> 
{repeatedObjects};
    </div>
    
  ); 
  */

  // basic header footer generation.
  /*
  return (
    <> 
    <Header/>
    <Food/>
    <Footer/>
    </>
  );*/
  
  // basic use of props 
  /*
  return (<>
  <Student name="Spongbob" age={30} isStudent={false}/>
  <Student name="Patrick" age={42} isStudent={true}/>
  <Student name="Hello" age={20} isStudent={false}/>
  <Student></Student>
  </>

  );
  */
  // conditional greeting for login system
  /*
  return (
    <>
    <UserGreeting isLoggedIn={true} username="Uday"/>
    <UserGreeting isLoggedIn={true}/>
    <UserGreeting isLoggedIn={false} username="Uday"/>
    <UserGreeting isLoggedIn={false} username="Uday"/>
    </>
    
  );*/

  //List rendering//

  /* const fruits = [{id:1,name:"apple", calories: 95},
                  {id:2,name:"orange", calories: 45},
                  {id:3,name:"banana", calories: 105},
                  {id:4,name:"banana", calories: 175}];

  return (
   <> {fruits.length > 0 && <List items={fruits} category="Fruits"/>} </>// same as ? :     
  ); */

  // onClick event 
  /* return (<Button></Button>) */
  /* return (<ProfilePicture/>); */
}

export default App
