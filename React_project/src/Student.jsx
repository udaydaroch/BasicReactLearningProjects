import PropTypes from 'prop-types'
function Student (props) {

  const style = {
   fontFamily: "Arial,sans-serif",
   fontSize: "2em",
   padding: "10px",
   border: "1px solid hsla(0,0%,50%, 0.8)" 
  };
  const para= {
    margin: "0",
  }
  return (
    <div style={style}> 
      <p style={para}>Name: {props.name}</p>
      <p style={para}>Age: {props.age}</p>
      <p style={para}>Student: {props.isStudent ? "yes": "no"}</p>
    </div>
  );
}

Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool
}
Student.defaultProps = {
  name: "Guest",
  age: 0,
  isStudent: false,
} 
export default Student;