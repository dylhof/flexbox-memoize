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

  checkAnswer = (event) => {
    if(this.props.currentQuestion.correctAnswer === event.target.src) {
      this.setState({ answerCorrect: true });
    };
    this.setState({ answerGiven: true })
  }

  resetAnswerGiven = () => {
    this.setState({ answerGiven: false });
    // this.setState({ answerCorrect: false })
    this.props.setAnsweredQuestions();
  }

  render() {
    return(
    <div>
      {!this.props.quizStarted && 
        <button onClick={this.props.startQuiz}>Start Quiz</button>
      }
      {this.props.quizStarted && !this.state.answerGiven && 
        <Question 
          currentQuestion={this.props.currentQuestion}
          checkAnswer={this.checkAnswer}/>
      }
      {this.props.quizStarted && this.state.answerGiven && !this.state.answerCorrect &&
        <Feedback 
          message='Not Quite...'
          resetAnswerGiven={this.resetAnswerGiven}
          currentQuestion={this.props.currentQuestion}/>
      }
      {this.props.quizStarted && this.state.answerGiven && this.state.answerCorrect &&
        <Feedback message='Correct!'
        resetAnswerGiven={this.resetAnswerGiven}
        currentQuestion={this.props.currentQuestion}/>
      }
    </div>
    )
  }
}

export default QuestionCard;