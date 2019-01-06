import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';


// const questions = [{
//   "property": "flex-direction: row",
//   "correctAnswer": "https://i.imgur.com/Xo1MD86.png",
//   "answers": ["https://i.imgur.com/Xo1MD86.png", "https://i.imgur.com/JIJHnVf.png", "https://i.imgur.com/4y9cZDw.png", "https://i.imgur.com/Id0kLlR.png"],
//   "info": "This establishes the main-axis, thus defining the direction flex items are placed in the flex container. Using row organizes the items from left to right.",
// },
// {
//   "property": "flex-direction: column",
//   "correctAnswer": "https://i.imgur.com/JIJHnVf.png",
//   "answers": ["https://i.imgur.com/JIJHnVf.png", "https://i.imgur.com/Xo1MD86.png", "https://i.imgur.com/4y9cZDw.png", "https://i.imgur.com/VdZUG9d.png"],
//   "info": "This establishes the main-axis, thus defining the direction flex items are placed in the flex container. Using Column organizes the items from top to bottom.",
// }]

describe('App', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <App />
    );
  });


  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should set the state of answeredQuestions', () => {
    wrapper.instance().updateQuestion = jest.fn();
    expect(wrapper.state('answeredQuestions')).toEqual(0);
    wrapper.instance().setAnsweredQuestions();
    expect(wrapper.state('answeredQuestions')).toEqual(1);
    expect(wrapper.instance().updateQuestion).toBeCalled();
  });

  it('should updtate the quesiton to the next question in the array', () => {
    expect(wrapper.state('currentQuestion')).toEqual(wrapper.state.questions[0]);
    wrapper.instance().setAnsweredQuestions();
    wrapper.instance().updateQuestion();
    expect(wrapper.state('currentQuestion')).toEqual(wrapper.state.questions[1])
  })

  it('should set the end of quiz', () => {
    wrapper.instance().setAnsweredQuestions();
    expect(wrapper.state('answeredQuestions')).toEqual(1);
    expect(wrapper.state('endOfQuiz')).toEqual(false);
    wrapper.instance().setEndOfQuiz();
    expect(wrapper.state('answeredQuestions')).toEqual(0);
    expect(wrapper.state('endOfQuiz')).toEqual(true);
  });

  it('should toggle state for show info', () => {
    expect(wrapper.state('showInfo')).toEqual(false);
    wrapper.instance().toggleShowInfo();
    expect(wrapper.state('showInfo')).toEqual(true);
    wrapper.instance().toggleShowInfo();
    expect(wrapper.state('showInfo')).toEqual(false);
  });

  it('should start the quiz', () => {
    wrapper.instance().setEndOfQuiz();
    expect(wrapper.state('endofQuiz')).toEqual(true);
    expect(wrapper.state('quizStarted')).toEqual(false);
    wrapper.instance().startQuiz();
    expect(wrapper.state('endofQuiz')).toEqual(false);
    expect(wrapper.state('quizStarted')).toEqual(true);
  });

});
