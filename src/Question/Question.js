import React from 'react';

function Question(props){
    return(
      <div className='question-div'>
        <h2>{props.currentQuestion.property}</h2>
        <p>If you included this property in your CSS, 
          what image most closely resembles the result?</p>
        <div>
          {props.randomAnswers.map(answer => {
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