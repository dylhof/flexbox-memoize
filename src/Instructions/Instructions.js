import React from 'react';

function Instructions(props) {
  return (
    <div>
      {props.showInstructions &&
      <div>
        <p>Instructions</p>
        <ol>
          <li>Click StartQuiz</li>
          <li>Choose the image that may be produced if the named flexbox property were in your CSS</li>
          <li>If you get stuck, check the sidebar to get more information about the flexbox property</li>
          <li>Enjoy creating simple layouts with flexbox!</li>
        </ol>
        <i class="far fa-times-circle" onClick={props.toggleShowInstructions}></i>
      </div>
      }
    </div>
  )
}

export default Instructions;