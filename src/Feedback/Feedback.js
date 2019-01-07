import React from 'react';

function Feedback(props) {
  return(  
    <div className='feedback-div'>
      {props.answerCorrect && <h3>Correct!</h3>}
      {!props.answerCorrect && <h3>Not Quite...</h3>}
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