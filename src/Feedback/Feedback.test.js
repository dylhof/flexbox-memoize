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
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Feedback 
        message='Correct'
        currentQuestion={question}/>
    )
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})