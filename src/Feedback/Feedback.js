import React from 'react';

function Feedback(props) {
  return(  
    <div>
      <h3> {props.message} </h3>
      <p> property </p>
      <p> description </p>
      <button onclick={props.updateQuestion}> Next Question </button>
    </div>
    )
}

export default Feedback;