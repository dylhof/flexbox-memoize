import React from 'react';

function Question(props) {
  const answers = props.currentQuestion.answers
  return(
    <div className='question-div'>
      <h2>{props.currentQuestion.property}</h2>
      <p>If you included this property in your CSS, 
        what image most closely resembles the result?</p>
      <div>
        {answers.map(answer => {
          return (
            <img
              className="answer--img"
              src={answer}
              alt={answer}
              key={answer}
              onClick={props.checkAnswer}
            />
          );
        })}
      </div>
    </div>
  )
}

export default Question;