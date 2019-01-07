import React from 'react';

function Feedback(props) {
  return(  
    <div className='feedback-div'>
      <h3> {props.message} </h3>
      <p className='feedback-property-p'> {props.currentQuestion.property} </p>
      <p className='feedback-info-p'> {props.currentQuestion.info} </p>
      <img 
      className='answer-img'
      src={props.currentQuestion.correctAnswer}
      alt={props.currentQuestion.property}
      key={props.currentQuestion.property}
      onClick={props.checkAnswer} />
      <button className='next-btn' onClick={props.resetAnswerGiven}> Next Question </button>
    </div>
    )
}

export default Feedback;