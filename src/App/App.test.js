import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

describe('App', () => {
  let wrapper;
  beforeEach(() => {
    // localStorage.setItem('incorrect', [{"property": "flex-direction: row"}])
    wrapper = shallow(
      <App />
    );
    wrapper.setState({ answeredQuestions: 0 })
  });

  afterEach(() => {
    localStorage.clear()
  })

  // it('should set local storage', () => {
  //   let incorrect = {"property": "flex-direction: column"}
  //   let itemsInStorage = JSON.parse(localStorage.getItem('incorrect'));
  //   expect(itemsInStorage).toEqual([{"property": "flex-direction: row"}])

  //   wrapper.instance().saveToLocalStorage("incorrect", [{"property": "flex-direction: row"}, incorrect])
  //   itemsInStorage = JSON.parse(localStorage.getItem('incorrect'))
  //   expect(itemsInStorage).toEqual[{"property": "flex-direction: row"}, {"property": "flex-direction: column"}]
  // })


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
    wrapper.setState({
      questions: [{"property": "flex-direction: row"}, {"property": "flex-direction: column"}]
    })
    wrapper.instance().randomize = jest.fn();
    expect(wrapper.state('currentQuestion')).toEqual({});
    wrapper.instance().updateQuestion();
    expect(wrapper.state('currentQuestion')).toEqual(wrapper.state().questions[0])
  })

  it('should set the end of quiz', () => {
    wrapper.instance().setAnsweredQuestions();
    expect(wrapper.state('answeredQuestions')).toEqual(1);
    expect(wrapper.state('endOfQuiz')).toEqual(false);
    wrapper.instance().setEndOfQuiz(true);
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
    wrapper.instance().updateQuestion = jest.fn();
    wrapper.instance().fetchQuestions = jest.fn();
    wrapper.instance().setEndOfQuiz(true);
    wrapper.instance().setAnsweredQuestions();
    expect(wrapper.state('answeredQuestions')).toEqual(1);
    expect(wrapper.state('endOfQuiz')).toEqual(true);
    expect(wrapper.state('quizStarted')).toEqual(false);
    wrapper.instance().resetQuiz();
    expect(wrapper.state('endOfQuiz')).toEqual(false);
    expect(wrapper.state('quizStarted')).toEqual(true);
  });

});
