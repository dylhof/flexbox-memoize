import React, { Component } from 'react';
import Header from '../Header/Header.js';
import Aside from '../Aside/Aside.js';
import QuestionCard from '../QuestionCard/QuestionCard.js';

class App extends Component {
  constructor() {
    super();
    let storedAnsweredQuestions = 0;
    let storedCorrectAnswers = 0;
    let storedIncorrect = [];
    let storedQuestions = [];
    if (localStorage.getItem('answeredQuestions')) {
      let storedAnsweredQuestionsString = JSON.parse(localStorage.getItem('answeredQuestions'));
      storedAnsweredQuestions = parseInt(storedAnsweredQuestionsString);
    }
    if (localStorage.getItem('correctAnswers')) {
      storedCorrectAnswers = JSON.parse(localStorage.getItem('correctAnswers'));
    }
    if (localStorage.getItem('incorrect')) {
      storedIncorrect = JSON.parse(localStorage.getItem('incorrect'));
    }
    if (localStorage.getItem('questions')) {
      storedQuestions = JSON.parse(localStorage.getItem('questions'))
    }
    this.state = {
      answeredQuestions: storedAnsweredQuestions,
      correctAnswers: storedCorrectAnswers,
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

  fetchQuestions = () => {
    fetch('http://memoize-datasets.herokuapp.com/api/v1/flexboxData')
        .then(questions => questions.json())
        .then(parsedQuestions => this.setState({ questions: parsedQuestions.flexboxData }, () => {
          this.saveToLocalStorage('questions', this.state.questions)
        }))
        .catch(err => console.log('Oh No! Something is wrong!', err))
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
    this.fetchQuestions();
    this.setState({ answeredQuestions: 0 }, this.updateQuestion);
    this.setState({ correctAnswers: 0 })
    this.setState({ incorrect: [] });
    this.setState({ endOfQuiz: false });
    this.setState({ quizStarted: true });
    localStorage.removeItem('correct');
    localStorage.removeItem('incorrect');
    localStorage.removeItem('answeredQuestions');
  }

  resetForReview = () => {
    localStorage.setItem('questions', JSON.stringify(this.state.questions));
    this.setState({ answeredQuestions: 0 }, this.updateQuestion);
    this.setState({ correctAnswers: 0 })
    this.setEndOfQuiz(false);
    this.setState({ quizStarted: true });
    localStorage.removeItem('answeredQuestions');
  }

  reviewIncorrect = () => {
    let incorrectQuestions = localStorage.getItem('incorrect');
    let parsedIncorrectQuestions = JSON.parse(incorrectQuestions);
    this.setState({ questions: parsedIncorrectQuestions }, this.resetForReview);
  }

  removeIncorrect = (question) => {
    let questionIndex = this.state.questions.findIndex(incorrect => incorrect.property === question.property);
    if(questionIndex !== -1) {
      let newIncorrect = [...this.state.incorrect];
      newIncorrect.splice(questionIndex, 1);
      this.setState({ incorrect: newIncorrect }, () => {
        this.saveToLocalStorage('incorrect', this.state.incorrect)
      })
    }
  }

  saveToLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  }

  setAnsweredQuestions = () => {
    this.setState({ 
      answeredQuestions: (this.state.answeredQuestions + 1) 
    }, () => {
    this.updateQuestion();
    this.saveToLocalStorage('answeredQuestions', (JSON.stringify(this.state.answeredQuestions)))
    });
  }

  setEndOfQuiz = (value) => {
    this.setState({ endOfQuiz: value })
  }

  setCurrentQuestion = () => {
    this.setState({ currentQuestion: this.state.questions[this.state.answeredQuestions]}, () => {
      this.randomize('randomAnswers', this.state.currentQuestion.answers)
    });
  }

  setCorrectAnswers = () => {
    this.setState({ correctAnswers: (this.state.correctAnswers + 1)}, () => {
      localStorage.setItem('correctAnswers', JSON.stringify(this.state.correctAnswers))
    })
  }

  setIncorrect = (question) => {
    let newIncorrect = [...this.state.incorrect];
    newIncorrect.push(question);
    this.setState({ incorrect: newIncorrect }, () => {
      this.saveToLocalStorage('incorrect', this.state.incorrect)
    });
  }

  setInfo = () => {
    this.setState({ showInfo: false });
  }

  startFromWhereILeftOff = () => {
    this.setCurrentQuestion();
    this.setEndOfQuiz(false);
    this.setState({ quizStarted: true });
  }

  toggleShowInfo = () => {
    this.setState({ showInfo: !this.state.showInfo })
  }

  updateQuestion = () => {
    let {answeredQuestions, questions} = this.state
    if (answeredQuestions < questions.length) {
      this.setCurrentQuestion();
    } else {
      this.setEndOfQuiz(true);
    }
    this.setInfo();
  }

  render() {
    let {answeredQuestions, correctAnswers, currentQuestion, showInfo, quizStarted, endOfQuiz, incorrect, questions, randomAnswers} = this.state
    return (
      <div className="App">
        <Header/>  
        <Aside 
          correctAnswers={correctAnswers}
          currentQuestion={currentQuestion}
          answeredQuestions={answeredQuestions}
          showInfo={showInfo}
          quizStarted={quizStarted}
          toggleShowInfo={this.toggleShowInfo}
          />
        
        {!quizStarted && !endOfQuiz &&
        <div className='button-div'>
          <button className='start-button' onClick={this.newQuestionOrder}>
            Start New Quiz
          </button>
          
          {(incorrect.length > 0) && 
            (answeredQuestions === questions.length) &&
            <button className='wrong-button' onClick={this.reviewIncorrect}> 
              Retry questions I got wrong
            </button>
          }
          
          {(answeredQuestions > 0) && 
          (answeredQuestions < questions.length) && 
          <button className='left-off-button' onClick={this.startFromWhereILeftOff}>
            Start Quiz Where I left off
          </button>}
        </div>
      }

      {quizStarted && !endOfQuiz &&
        <QuestionCard 
          currentQuestion={currentQuestion}
          setAnsweredQuestions={this.setAnsweredQuestions}
          setCorrectAnswers={this.setCorrectAnswers}
          randomAnswers={randomAnswers}
          setIncorrect={this.setIncorrect}
          removeIncorrect={this.removeIncorrect}/>
      }

      {endOfQuiz && 
        <div className='button-div'>
          <div className='score-div'> 
            <h3>Your Score:</h3>
            <p>{correctAnswers} Correct Answers</p>
            <p>{answeredQuestions} Questions Answered</p>
          </div>
          <button className='start-button' onClick={this.newQuestionOrder}>Start New Quiz!</button>
          {(incorrect.length > 0) && 
          <button className='wrong-button' onClick={this.reviewIncorrect}>Retry questions I got wrong</button>}
        </div>
      }
      </div>
    );
  }
}

export default App;
