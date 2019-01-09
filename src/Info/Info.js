import React from 'react';

function Info(props) {
    return (
      <div className='info-div'>
        {!props.quizStarted && 
          <div className='aside-instruct-div'>
            <p>Instructions</p>
            <ol className='instructions-ol'>
              <li>Click StartQuiz</li>
              <li>Choose the image that may be produced if the named flexbox property were in your CSS</li>
              <li>If you get stuck, check back here to get more information about the flexbox property</li>
              <li>Enjoy creating simple layouts with flexbox!</li>
            </ol>
          </div>
        }
        {props.quizStarted && !props.showInfo && 
            <div className='show-more-info-div' onClick={props.toggleShowInfo} >
              <p className='show-more-info-p'>
              Click Here to show more info about: 
              </p>
              <p className='show-more-info-p'>{props.currentQuestion.property}
              </p> 
            </div>   
        }
        {props.quizStarted && props.showInfo && 
          <div onClick={props.toggleShowInfo}>
            <p className='property-property-p'>
             {props.currentQuestion.property}</p>
             <p className='property-info-p'>
              {props.currentQuestion.info}
            </p>
          </div>
        }
      </div>
    )
}

export default Info;