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

  resetAnswerGiven = () => {
    this.setState({ answerGiven: false });
    this.props.updateQuestion();
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
        <Feedback 
          message='Not Quite...'
          updateQuestion={this.resetAnswerGiven}/>
      }
      {this.props.quizStarted && this.state.answerGiven && this.state.answerCorrect &&
        <Feedback message='Correct!'
        updateQuestion={this.resetAnswerGiven}/>
      }
    </div>
    )
  }
}

export default QuestionCard;