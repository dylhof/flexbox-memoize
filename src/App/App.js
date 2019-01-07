import React, { Component } from 'react';
import Header from '../Header/Header.js';
import Aside from '../Aside/Aside.js';
import QuestionCard from '../QuestionCard/QuestionCard.js';

class App extends Component {
  constructor() {
    super();
    let storedAnsweredQuestions = 0;
    let storedCorrect = [];
    let storedIncorrect = [];
    let storedQuestions = [];
    if (localStorage.getItem('answeredQuestions')) {
      let storedAnsweredQuestionsString = JSON.parse(localStorage.getItem('answeredQuestions'));
      storedAnsweredQuestions = parseInt(storedAnsweredQuestionsString);
    }
    if (localStorage.getItem('correct')) {
      storedCorrect = JSON.parse(localStorage.getItem('correct'));
    }
    if (localStorage.getItem('incorrect')) {
      storedIncorrect = JSON.parse(localStorage.getItem('incorrect'));
    }
    if (localStorage.getItem('questions')) {
      storedQuestions = JSON.parse(localStorage.getItem('questions'))
    }
    this.state = {
      answeredQuestions: storedAnsweredQuestions,
      correct: storedCorrect,
      correctAnswers: storedCorrect.length,
      currentQuestion: {},
      endOfQuiz: false,
      incorrect: storedIncorrect,
      questions: storedQuestions,
      quizStarted: false,
      randomAnswers: [],
      showInfo: false
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
        
        {!this.state.quizStarted && !this.state.endOfQuiz &&
        <div>
          <button className='start-button' onClick={this.newQuestionOrder}>Start New Quiz</button>
          
          {(this.state.incorrect.length !== 0) && 
            (this.answeredQuestions === this.state.questions.length) &&
            <button onClick={this.reviewIncorrect}>Retry questions I got wrong</button>}
          
          {(this.state.answeredQuestions > 0) && 
          (this.state.answeredQuestions < this.state.questions.length) && 
          <button onClick={this.startFromWhereILeftOff}>Start Quiz Where I left off</button>}
        </div>
      }

      {this.state.quizStarted && !this.state.endOfQuiz &&
        <QuestionCard 
          currentQuestion={this.state.currentQuestion}
          setAnsweredQuestions={this.setAnsweredQuestions}
          setCorrectAnswers={this.setCorrectAnswers}
          randomAnswers={this.state.randomAnswers}
          setCorrect={this.setCorrect}
          setIncorrect={this.setIncorrect}/>
      }

      {this.state.endOfQuiz && 
        <div> 
          <h3>Your Score:</h3>
          <p>{this.state.correctAnswers} Correct Answers</p>
          <p>{this.state.answeredQuestions} Questions Answered</p>
          <button onClick={this.newQuestionOrder}>Restart New Quiz!</button>
          {(this.state.incorrect.length !== 0) && 
          <button onClick={this.reviewIncorrect}>Retry questions I got wrong</button>}
        </div>
      }
      </div>
    );
  }
}

export default App;
