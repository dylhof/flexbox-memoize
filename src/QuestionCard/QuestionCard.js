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
    let {currentQuestion} = this.props
    if(this.props.currentQuestion.correctAnswer === event.target.src) {
      this.setState({ answerCorrect: true });
      this.props.setCorrect(currentQuestion);
      this.props.setCorrectAnswers();
      this.props.removeIncorrect(currentQuestion)
    } else { 
      this.setState({ answerCorrect: false })
      this.props.setIncorrect(currentQuestion);
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
      {!this.state.answerGiven && 
        <Question 
          currentQuestion={this.props.currentQuestion}
          checkAnswer={this.checkAnswer}
          randomAnswers={this.props.randomAnswers}/>
      }
      {this.state.answerGiven && 
        <Feedback 
          answerCorrect={this.state.answerCorrect}
          resetAnswerGiven={this.resetAnswerGiven}
          currentQuestion={this.props.currentQuestion}/>
      }
    </div>
    )
  }
}

export default QuestionCard;