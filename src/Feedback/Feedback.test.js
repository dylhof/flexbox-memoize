import React from 'react';
import Feedback from './Feedback';
import { shallow } from 'enzyme';

const question = {
  "property": "flex-direction: row",
  "correctAnswer": "https://i.imgur.com/Xo1MD86.png",
  "answers": ["https://i.imgur.com/Xo1MD86.png", "https://i.imgur.com/JIJHnVf.png", "https://i.imgur.com/4y9cZDw.png", "https://i.imgur.com/Id0kLlR.png"],
  "info": "This establishes the main-axis, thus defining the direction flex items are placed in the flex container. Using row organizes the items from left to right.",
  "family-member": "Parent",
  "model": "Flexbox"
}

describe('Feedback', () => {
  it('should match the snapshot for a correct answer', () => {
    let wrapper = shallow(
      <Feedback 
        answerCorrect={true}
        currentQuestion={question}/>
    )
    expect(wrapper).toMatchSnapshot();
  })

  it('should match the snapshot for an incorrect answer', () => {
    let wrapper = shallow(
      <Feedback 
        answerCorrect={false}
        currentQuestion={question}/>
    )
    expect(wrapper).toMatchSnapshot();
  })
})