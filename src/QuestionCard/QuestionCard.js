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

  checkQuestionsRemaining = () => {
    if(this.props.answeredQuestions < this.props.questions){
    }
  }

  checkAnswer = (event) => {
    if(this.props.currentQuestion.correctAnswer === event.target.src) {
      this.setState({ answerCorrect: true });
      this.props.setCorrect(this.props.currentQuestion);
      this.props.setCorrectAnswers();
    } else { 
      this.setState({ answerCorrect: false })
      this.props.setIncorrect(this.props.currentQuestion);
    };
    this.setAnswerGiven();
  }
  
  setAnswerGiven = () => {
    this.setState({ answerGiven: true });
  }
  
  resetAnswerGiven = () => {
    this.setState({ answerGiven: false });
    this.props.setAnsweredQuestions();
  }

  render() {
    return(
    <div className='question-card'>
      {!this.props.quizStarted && !this.props.endofQuiz &&
        <button className='start-button' onClick={this.props.startQuiz}>Start Quiz</button>
      }
      {this.props.quizStarted && !this.state.answerGiven && !this.props.endOfQuiz &&
        <Question 
          currentQuestion={this.props.currentQuestion}
          checkAnswer={this.checkAnswer}
          randomAnswers={this.props.randomAnswers}/>
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
      {this.props.endOfQuiz && 
        <div> 
          <h3>Your Score:</h3>
          <p>{this.props.correctAnswers} Correct Answers</p>
          <p>{this.props.answeredQuestions} Questions Answered</p>
          <button onClick={this.props.resetQuiz}>Restart Quiz!</button>
          <button onClick={this.props.reviewIncorrect}>Retry questions I got wrong</button>
        </div>
      }
    </div>
    )
  }
}

export default QuestionCard;