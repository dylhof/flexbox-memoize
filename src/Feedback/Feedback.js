import React from 'react';

function Feedback(props) {
  return(  
    <div>
      <h3> {props.message} </h3>
      <p> {props.currentQuestion.property} </p>
      <p> {props.currentQuestion.info} </p>
      <button onClick={props.resetAnswerGiven}> Next Question </button>
    </div>
    )
}

export default Feedback;