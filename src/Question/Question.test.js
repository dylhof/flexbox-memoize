import React from 'react';
import Question from './Question';
import { shallow } from 'enzyme';

const question = {
  "property": "flex-direction: row",
  "correctAnswer": "https://i.imgur.com/Xo1MD86.png",
  "answers": [
  "https://i.imgur.com/Xo1MD86.png",
  "https://i.imgur.com/JIJHnVf.png",
  "https://i.imgur.com/4y9cZDw.png",
  "https://i.imgur.com/Id0kLlR.png"
  ],
  "info": "This establishes the main-axis, thus defining the direction flex items are placed in the flex container. Using row organizes the items from left to right."
  }
  const checkAnswerMock = jest.fn();
  const randomAnswers = [
    "https://i.imgur.com/Xo1MD86.png"
    ]

describe('Question', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Question
        currentQuestion={question}
        checkAnswer={checkAnswerMock}
        randomAnswers={randomAnswers}/>
    )
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should call check Answer when an answer is checked', () => {
    wrapper.find('.answer-img').simulate('click');
    expect(checkAnswerMock).toBeCalled();
  })

})