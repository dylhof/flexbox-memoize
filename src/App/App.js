import React, { Component } from 'react';
import Header from '../Header/Header.js';
import Aside from '../Aside/Aside.js';
import QuestionCard from '../QuestionCard/QuestionCard.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      answeredQuestions: 0,
      correctAnswers: 0,
      quizStarted: false,
      showInfo: false,
      questions: [{
        "property": "flex-direction: row",
        "correctAnswer": "https://i.imgur.com/Xo1MD86.png",
        "answers": ["https://i.imgur.com/Xo1MD86.png", "flex-direction-column.png", "justify-content-flex-end.png", "flex-direction-row-reverse.png"],
        "info": "This establishes the main-axis, thus defining the direction flex items are placed in the flex container. Using row organizes the items from left to right.",
        "family-member": "Parent",
        "model": "Flexbox"
      },
      {
        "property": "flex-direction: column",
        "correctAnswer": "flex-direction-column.png",
        "answers": ["flex-direction-column.png", "flex-direction-row.png", "justify-content-flex-end.png", "flex-direction-column-reverse.png"],
        "info": "This establishes the main-axis, thus defining the direction flex items are placed in the flex container. Using Column organizes the items from top to bottom.",
        "family-member": "Parent",
        "model": "Flexbox"
      },
      {
        "property": "flex-direction: row-reverse",
        "correctAnswer": "flex-direction-row-reverse.png",
        "answers": ["flex-direction-row-reverse.png", "flex-direction-column.png", "justify-content-flex-end.png", "flex-direction-row.png"],
        "info": "This establishes the main-axis, thus defining the direction flex items are placed in the flex container. Using row reverse organizes the items from right to left.",
        "family-member": "Parent",
        "model": "Flexbox"
      }],
      currentQuestion: {},

    }
  }

  setAnsweredQuestions = () => {
    this.setState({ answeredQuestions: this.state.answeredQuestions + 1 });
    this.updateQuestion();
  }

  updateQuestion = () => {
    this.setState({ currentQuestion: this.state.questions[this.state.answeredQuestions]})
  }

  toggleShowInfo = () => {
    this.setState({ showInfo: !this.state.showInfo })
  }

  startQuiz = () => {
    this.setState({ currentQuestion: this.state.questions[0] });
    this.setState({ quizStarted: true });
  }

  render() {
    return (
      <div className="App">
        <Header/>  
        <Aside 
          correctAnswers={this.state.correctAnswers}
          currentQuestion={this.state.currentQuestion}
          answeredQuestions={this.state.answeredQuestions}
          showInfo={this.state.showInfo}
          quizStarted={this.state.quizStarted}
          toggleShowInfo={this.toggleShowInfo}/>
        <QuestionCard 
          currentQuestion={this.state.currentQuestion}
          quizStarted={this.state.quizStarted}
          startQuiz={this.startQuiz}
          setAnsweredQuestions={this.setAnsweredQuestions}/>
      
      </div>
    );
  }
}

export default App;
