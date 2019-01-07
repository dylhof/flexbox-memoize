import React, { Component } from 'react';
import Header from '../Header/Header.js';
import Aside from '../Aside/Aside.js';
import QuestionCard from '../QuestionCard/QuestionCard.js';

class App extends Component {
  constructor() {
    super();
    let storedCorrect = [];
    let storedIncorrect = [];
    if (localStorage.getItem('correct')) {
      storedCorrect = JSON.parse(localStorage.getItem('correct'));
    }
    if (localStorage.getItem('incorrect')) {
      storedIncorrect = JSON.parse(localStorage.getItem('incorrect'))
    }
    this.state = {
      correct: storedCorrect,
      incorrect: storedIncorrect,
      answeredQuestions: 0,
      correctAnswers: 0,
      endOfQuiz: false,
      quizStarted: false,
      showInfo: false,
      questions: [],
      currentQuestion: {},
      randomAnswers: []
    }
  }

  componentDidMount() {
    fetch('http://memoize-datasets.herokuapp.com/api/v1/flexboxData')
      .then(questions => questions.json())
      .then(parsedQuestions => this.setState({ questions: parsedQuestions.flexboxData }))
      .catch(err => console.log('Oh No! Something is wrong!', err))
  }

  saveToLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  }

  setCorrect = (question) => {
    let newCorrect = this.state.correct.slice();
    newCorrect.push(question);
    this.setState({ correct: newCorrect }, () => {
      this.saveToLocalStorage('correct', this.state.correct)
    });
  }

  setIncorrect = (question) => {
    let newIncorrect = this.state.incorrect.slice();
    newIncorrect.push(question);
    this.setState({ incorrect: newIncorrect }, () => {
      this.saveToLocalStorage('incorrect', this.state.incorrect)
    });
  }

  setAnsweredQuestions = () => {
    this.setState({ 
      answeredQuestions: (this.state.answeredQuestions + 1) 
    }, this.updateQuestion);
  }

  setCorrectAnswers = () => {
    this.setState({ correctAnswers: (this.state.correctAnswers + 1)})
  }

  updateQuestion = () => {
    if (this.state.answeredQuestions < this.state.questions.length) {
      this.setState({ currentQuestion: this.state.questions[this.state.answeredQuestions]}, () => {
        this.randomAnswers(this.state.currentQuestion.answers)
      });
    } else {
    this.setState({ endOfQuiz: true });
    }
  }

  resetQuiz = () => {
    this.setState({ answeredQuestions: 0 })
    this.setState({ correctAnswers: 0 })
    this.setState({ quizStarted: false });
    this.saveToLocalStorage('correct', []);
    this.saveToLocalStorage('incorrect', []);
    this.startQuiz();
  }

  toggleShowInfo = () => {
    this.setState({ showInfo: !this.state.showInfo })
  }

  startQuiz = () => {
    this.setState({ currentQuestion: this.state.questions[0] }, () => {
      this.randomAnswers(this.state.currentQuestion.answers)
    });
    this.setState({ endOfQuiz: false })
    this.setState({ quizStarted: true });
  }

  randomAnswers = (answers) => {
    let currentIndex = answers.length;
    let temporaryValue, randomIndex;
    while(0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = answers[currentIndex];
      answers[currentIndex] = answers[randomIndex];
      answers[randomIndex] = temporaryValue
    }
    this.setState({ randomAnswers: answers })
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
          setCorrectAnswers={this.setCorrectAnswers}
          resetQuiz={this.resetQuiz}
          endOfQuiz={this.state.endOfQuiz}
          questions={this.state.questions.length}
          answeredQuestions={this.state.answeredQuestions}
          correctAnswers={this.state.correctAnswers}
          randomAnswers={this.state.randomAnswers}
          setCorrect={this.setCorrect}
          setIncorrect={this.setIncorrect}/>
      
      </div>
    );
  }
}

export default App;
