import PropTypes from 'prop-types'
function UserGreeting (props) {
  const welcome = <h2 className="welcome-message"> Welcome {props.username}</h2>;
  const prompt = <h2 className="login-prompt"> Please log in to continue </h2>
  return (props.isLoggedIn) ? 
   welcome: prompt ;
  
}
UserGreeting.PropTypes = {
  isLoggedIn: PropTypes.bool,
  username: PropTypes.string,
}
export default UserGreeting;

UserGreeting.defaultProps = {
  isLoggedIn:false,
  username: "Guest",
}