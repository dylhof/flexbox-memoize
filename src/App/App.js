import React, { Component } from 'react';
import Header from '../Header/Header.js';
import Aside from '../Aside/Aside.js';
import QuestionCard from '../QuestionCard/QuestionCard.js';

class App extends Component {
  constructor() {
    super();
    let storedCorrect = [];
    let storedIncorrect = [];
    let storedAnsweredQuestions = 0;
    let storedQuestions = [];
    if (localStorage.getItem('correct')) {
      storedCorrect = JSON.parse(localStorage.getItem('correct'));
    }
    if (localStorage.getItem('incorrect')) {
      storedIncorrect = JSON.parse(localStorage.getItem('incorrect'));
    }
    if (localStorage.getItem('answeredQuestions')) {
      let storedAnsweredQuestionsString = JSON.parse(localStorage.getItem('answeredQuestions'));
      storedAnsweredQuestions = parseInt(storedAnsweredQuestionsString);
    }
    if (localStorage.getItem('questions')) {
      storedQuestions = JSON.parse(localStorage.getItem('questions'))
    }
    this.state = {
      correct: storedCorrect,
      incorrect: storedIncorrect,
      answeredQuestions: storedAnsweredQuestions,
      correctAnswers: storedCorrect.length,
      endOfQuiz: false,
      quizStarted: false,
      showInfo: false,
      questions: storedQuestions,
        // {
        // "property": "flex-direction: row",
        // "correctAnswer": "https://i.imgur.com/Xo1MD86.png",
        // "answers": [
        // "https://i.imgur.com/Xo1MD86.png",
        // "https://i.imgur.com/JIJHnVf.png",
        // "https://i.imgur.com/4y9cZDw.png",
        // "https://i.imgur.com/Id0kLlR.png"
        // ],
        // "info": "This establishes the main-axis, thus defining the direction flex items are placed in the flex container. Using row organizes the items from left to right.",
        // "family-member": "Parent",
        // "model": "Flexbox"
        // },
        // {
        // "property": "flex-direction: column",
        // "correctAnswer": "https://i.imgur.com/JIJHnVf.png",
        // "answers": [
        // "https://i.imgur.com/JIJHnVf.png",
        // "https://i.imgur.com/Xo1MD86.png",
        // "https://i.imgur.com/4y9cZDw.png",
        // "https://i.imgur.com/VdZUG9d.png"
        // ],
        // "info": "This establishes the main-axis, thus defining the direction flex items are placed in the flex container. Using Column organizes the items from top to bottom.",
        // "family-member": "Parent",
        // "model": "Flexbox"
        // }],
      currentQuestion: {},
      randomAnswers: []
    }
  }

  componentDidMount() {
    if (!localStorage.getItem('questions')) {
      fetch('http://memoize-datasets.herokuapp.com/api/v1/flexboxData')
        .then(questions => questions.json())
        .then(parsedQuestions => this.setState({ questions: parsedQuestions.flexboxData }))
        .catch(err => console.log('Oh No! Something is wrong!', err))
    }
  }

  newQuestionOrder = () => {
    this.randomize('questions', this.state.questions)
  }

  randomize = (key, array) => {
    let currentIndex = array.length;
    let temporaryValue, randomIndex;
    while(0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue
    }
    this.setState({ [key]: array }, () => {
      if(key === 'questions') {
        localStorage.setItem('questions', JSON.stringify(this.state.questions));
        this.resetQuiz();
      }
    })
  }

  resetQuiz = () => {
    this.setState({ answeredQuestions: 0 }, this.updateQuestion);
    this.setState({ correctAnswers: 0 })
    this.setState({ quizStarted: false });
    this.setState({ correct: [] });
    this.setState({ incorrect: [] });
    this.setState({ endOfQuiz: false });
    this.setState({ quizStarted: true });
    localStorage.removeItem('correct');
    localStorage.removeItem('incorrect');
    localStorage.removeItem('answeredQuestions');
  }

  reviewIncorrect = () => {
    let incorrectQuestions = localStorage.getItem('incorrect');
    let parsedIncorrectQuestions = JSON.parse(incorrectQuestions);
    this.setState({ questions: parsedIncorrectQuestions }, 
      this.resetQuiz);
  }

  saveToLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  }

  setAnsweredQuestions = () => {
    this.setState({ 
      answeredQuestions: (this.state.answeredQuestions + 1) 
    }, () => {
    this.updateQuestion();
    let storedAnsweredQuestions = JSON.stringify(this.state.answeredQuestions);
    this.saveToLocalStorage('answeredQuestions', (storedAnsweredQuestions))
    });
  }

  setCorrect = (question) => {
    let newCorrect = this.state.correct.slice();
    newCorrect.push(question);
    this.setState({ correct: newCorrect }, () => {
      this.saveToLocalStorage('correct', this.state.correct)
    });
  }

  setCorrectAnswers = () => {
    this.setState({ correctAnswers: (this.state.correctAnswers + 1)})
  }

  setIncorrect = (question) => {
    let newIncorrect = this.state.incorrect.slice();
    newIncorrect.push(question);
    this.setState({ incorrect: newIncorrect }, () => {
      this.saveToLocalStorage('incorrect', this.state.incorrect)
    });
  }

  startFromWhereILeftOff = () => {
    this.setState({ currentQuestion: this.state.questions[this.state.answeredQuestions]}, () => {
      this.randomize('randomAnswers', this.state.currentQuestion.answers)
    });
    this.setState({ endOfQuiz: false })
    this.setState({ quizStarted: true });
  }

  toggleShowInfo = () => {
    this.setState({ showInfo: !this.state.showInfo })
  }

  updateQuestion = () => {
    if (this.state.answeredQuestions < this.state.questions.length) {
      this.setState({ currentQuestion: this.state.questions[this.state.answeredQuestions]}, () => {
        this.randomize('randomAnswers', this.state.currentQuestion.answers)
      });
    } else {
    this.setState({ endOfQuiz: true });
    }
    this.setState({ showInfo: false });
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
          setAnsweredQuestions={this.setAnsweredQuestions}
          setCorrectAnswers={this.setCorrectAnswers}
          newQuestionOrder={this.newQuestionOrder}
          endOfQuiz={this.state.endOfQuiz}
          questions={this.state.questions.length}
          answeredQuestions={this.state.answeredQuestions}
          correctAnswers={this.state.correctAnswers}
          randomAnswers={this.state.randomAnswers}
          setCorrect={this.setCorrect}
          setIncorrect={this.setIncorrect}
          reviewIncorrect={this.reviewIncorrect}
          areThereIncorrect={this.state.incorrect.length}
          startFromWhereILeftOff={this.startFromWhereILeftOff}/>
      
      </div>
    );
  }
}

export default App;
