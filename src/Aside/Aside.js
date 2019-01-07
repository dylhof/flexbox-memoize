import React from 'react';
import Info from '../Info/Info.js';

function Aside(props) {
  return (
    <aside className='aside'>
      <div className='aside-score-div'> 
        <h3>Your Score:</h3>
        <p>{props.correctAnswers} Correct Answers</p>
        <p>{props.answeredQuestions} Questions Answered</p>
      </div>
      <div className='aside-info-div'>
        <button className='learn-more-btn' >
          <a href='https://css-tricks.com/snippets/css/a-guide-to-flexbox/' target='_blank'>
            Learn more about flexBox!
          </a>
        </button>
        <Info 
          currentQuestion={props.currentQuestion}
          showInfo={props.showInfo}
          quizStarted={props.quizStarted}
          toggleShowInfo={props.toggleShowInfo}/>
      </div>
    </aside>
  )
}

export default Aside;