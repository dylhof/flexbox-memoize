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
      currentQuestion: {
        "property": "flex-direction: column-reverse",
        "correctAnswer": "flex-direction-column-reverse.png",
        "answers": ["flex-direction-column-reverse.png", "flex-direction-column.png", "flex-direction-row.png", "justify-content-flex-end.png"],
        "info": "This establishes the main-axis, thus defining the direction flex items are placed in the flex container. Using column reverse organizes the items from bottom to top.",
        "family-member": "Parent",
        "model": "Flexbox"
      },
      quizStarted: false,
      showInfo: false,
      questions: []
    }
  }

  toggleShowInfo = () => {
    this.setState({ showInfo: !this.state.showInfo })
  }

  startQuiz = () => {
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
          startQuiz={this.startQuiz}/>
      
      </div>
    );
  }
}

export default App;
