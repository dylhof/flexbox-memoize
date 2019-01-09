import React from 'react';
import QuestionCard from './QuestionCard';
import { shallow } from 'enzyme';

const currentQuestion = {
  "property": "flex-direction: row",
  "correctAnswer": "https://i.imgur.com/Xo1MD86.png",
  "answers": [
  "https://i.imgur.com/Xo1MD86.png",
  "https://i.imgur.com/JIJHnVf.png",
  "https://i.imgur.com/4y9cZDw.png",
  "https://i.imgur.com/Id0kLlR.png"
  ],
  "info": "This establishes the main-axis, thus defining the direction flex items are placed in the flex container. Using row organizes the items from left to right.",
  }
const answerClickMock = {target: {src: "https://i.imgur.com/Xo1MD86.png"}}
const wrongAnswerClickMock = {target: {src: "https://i.imgur.com/Id0kLlR.png"}}
const setCorrectAnswersMock = jest.fn();
const removeIncorrectMock = jest.fn();
const setIncorrectMock = jest.fn();
const setAnsweredQuestionsMock = jest.fn();

describe('QuestionCard', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <QuestionCard 
        currentQuestion={currentQuestion}
        setCorrectAnswers={setCorrectAnswersMock}
        removeIncorrect={removeIncorrectMock}
        setIncorrect={setIncorrectMock}
        setAnsweredQuestions={setAnsweredQuestionsMock}/>
    )
    wrapper.setState({answerCorrect: false, answerGiven: false})
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should check that answer is correct when passed the correct answer', () => {
    wrapper.instance().setAnswerGiven = jest.fn();
    expect(wrapper.state('answerCorrect')).toEqual(false);
    wrapper.instance().checkAnswer(answerClickMock);
    expect(wrapper.state('answerCorrect')).toEqual(true);
    expect(setCorrectAnswersMock).toBeCalled();
    expect(removeIncorrectMock).toBeCalled();
    expect(wrapper.instance().setAnswerGiven).toBeCalled();
  })
  
  it('should check that the answer is incorrect when passed an incorrect answer', () => {
    wrapper.instance().setAnswerGiven = jest.fn();
    wrapper.instance().checkAnswer(answerClickMock);
    expect(wrapper.state('answerCorrect')).toEqual(true);
    wrapper.instance().checkAnswer(wrongAnswerClickMock);
    expect(wrapper.state('answerCorrect')).toEqual(false);
    expect(setIncorrectMock).toBeCalled();
    expect(wrapper.instance().setAnswerGiven).toBeCalled();
  })

  it('should set the answer given state as true', () => {
    expect(wrapper.state('answerGiven')).toEqual(false);
    wrapper.instance().setAnswerGiven();
    expect(wrapper.state('answerGiven')).toEqual(true);
  })

  it('should reset the answerGiven state as false', () => {
    wrapper.instance().setAnswerGiven();
    expect(wrapper.state('answerGiven')).toEqual(true);
    wrapper.instance().resetAnswerGiven();
    expect(wrapper.state('answerGiven')).toEqual(false);
    expect(setAnsweredQuestionsMock).toBeCalled();
  })

})