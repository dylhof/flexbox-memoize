import React, { Component } from 'react';
import Question from '../Question/Question.js';
import Feedback from '../Feedback/Feedback.js';

class QuestionCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answerGiven: false,
      answerCorrect: false
    }
  }

  render() {
    return(
    <div>
      {!this.props.quizStarted && 
        <button onClick={this.props.startQuiz}>Start Quiz</button>
      }
      {this.props.quizStarted && !this.state.answerGiven && 
        <Question currentQuestion={this.props.currentQuestion}/>
      }
      {this.props.quizStarted && this.state.answerGiven && !this.state.answerCorrect &&
        <Feedback message='Not Quite...'/>
      }
      {this.props.quizStarted && this.state.answerGiven && this.state.answerCorrect &&
        <Feedback message='Correct!'/>
      }
    </div>
    )
  }
}

export default QuestionCard;