import React, { Component } from 'react';
import Header from '../Header/Header.js';
import Aside from '../Aside/Aside.js';
import QuestionCard from '../QuestionCard/QuestionCard.js';
import flexboxData from '../mockData.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      answeredQuestions: 0,
      correctAnswers: 0,
      endOfQuiz: false,
      quizStarted: false,
      showInfo: false,
      questions: [{
        "property": "flex-direction: row",
        "correctAnswer": "https://i.imgur.com/Xo1MD86.png",
        "answers": ["https://i.imgur.com/Xo1MD86.png", "https://i.imgur.com/JIJHnVf.png", "https://i.imgur.com/4y9cZDw.png", "https://i.imgur.com/Id0kLlR.png"],
        "info": "This establishes the main-axis, thus defining the direction flex items are placed in the flex container. Using row organizes the items from left to right.",
        "family-member": "Parent",
        "model": "Flexbox"
      },
      {
        "property": "flex-direction: column",
        "correctAnswer": "https://i.imgur.com/JIJHnVf.png",
        "answers": ["https://i.imgur.com/JIJHnVf.png", "https://i.imgur.com/Xo1MD86.png", "https://i.imgur.com/4y9cZDw.png", "https://i.imgur.com/VdZUG9d.png"],
        "info": "This establishes the main-axis, thus defining the direction flex items are placed in the flex container. Using Column organizes the items from top to bottom.",
        "family-member": "Parent",
        "model": "Flexbox"
      },
      {
        "property": "flex-direction: row-reverse",
        "correctAnswer": "https://i.imgur.com/Id0kLlR.png",
        "answers": ["https://i.imgur.com/Id0kLlR.png", "https://i.imgur.com/JIJHnVf.png", "https://i.imgur.com/4y9cZDw.png", "https://i.imgur.com/Xo1MD86.png"],
        "info": "This establishes the main-axis, thus defining the direction flex items are placed in the flex container. Using row reverse organizes the items from right to left.",
        "family-member": "Parent",
        "model": "Flexbox"
      },
      {
        "property": "flex-direction: column-reverse",
        "correctAnswer": "https://i.imgur.com/VdZUG9d.png",
        "answers": ["https://i.imgur.com/VdZUG9d.png", "https://i.imgur.com/JIJHnVf.png", "https://i.imgur.com/Xo1MD86.png", "https://i.imgur.com/4y9cZDw.png"],
        "info": "This establishes the main-axis, thus defining the direction flex items are placed in the flex container. Using column reverse organizes the items from bottom to top.",
        "family-member": "Parent",
        "model": "Flexbox"
      }],
      currentQuestion: {},

    }
  }

  setAnsweredQuestions = () => {
    this.setState({ 
      answeredQuestions: (this.state.answeredQuestions + 1) 
    }, this.updateQuestion);
  }

  updateQuestion = () => {
    if (this.state.answeredQuestions < this.state.questions.length) {
      this.setState({ currentQuestion: this.state.questions[this.state.answeredQuestions]})
    } else {
      this.setEndOfQuiz();
    }
  }

  setEndOfQuiz = () => {
    this.setState({ endOfQuiz: true });
    this.setState({ answeredQuestions: 0 })
    this.setState({ quizStarted: false });
  }

  toggleShowInfo = () => {
    this.setState({ showInfo: !this.state.showInfo })
  }

  startQuiz = () => {
    this.setState({ currentQuestion: this.state.questions[0] });
    this.setState({ endOfQuiz: false })
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
          setAnsweredQuestions={this.setAnsweredQuestions}
          setEndOfQuiz={this.setEndOfQuiz}
          endOfQuiz={this.state.endOfQuiz}/>
      
      </div>
    );
  }
}

export default App;
