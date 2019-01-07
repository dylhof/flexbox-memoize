import React from 'react';

function Info(props) {
    return (
      <div className='info-div'>
        {!props.quizStarted && 
          <div className='aside-instruct-div'>
            <p>Instructions</p>
            <ol>
              <li>Click StartQuiz</li>
              <li>Choose the image that may be produced if the named flexbox property were in your CSS</li>
              <li>If you get stuck, check back here to get more information about the flexbox property</li>
              <li>Enjoy creating simple layouts with flexbox!</li>
            </ol>
          </div>
        }
        {props.quizStarted && !props.showInfo && 
            <p className='show-more-info-p' onClick={props.toggleShowInfo}>
              Click Here to show more info about: 
              <span>{props.currentQuestion.property}</span> 
            </p>    
        }
        {props.quizStarted && props.showInfo && 
            <p className='property-info-p' onClick={props.toggleShowInfo}>
              {props.currentQuestion.property}
              {props.currentQuestion.info}
            </p>
        }
      </div>
    )
}

export default Info;