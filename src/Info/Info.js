import React from 'react';

function Info(props) {
    return (
      <div>
        {!props.quizStarted && 
          <Instructions />
        }
        {props.quizStarted && !props.showInfo && 
            <p onClick={props.toggleShowInfo}>
              Click Here to show more info about: 
              <span>{props.currentQuestion.property}</span> 
            </p>    
        }
        {props.quizStarted && props.showInfo && 
            <p onClick={props.toggleShowInfo}>
              {props.currentQuestion.info}
            </p>
        }
      </div>
    )
}

export default Info;