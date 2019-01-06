import React from 'react';
import Info from './Info';
// import Instructions from '../Instructions/Instuructions.js'
import { shallow } from 'enzyme';

const question = {
  "property": "flex-direction: row",
  "correctAnswer": "https://i.imgur.com/Xo1MD86.png",
  "answers": ["https://i.imgur.com/Xo1MD86.png", "https://i.imgur.com/JIJHnVf.png", "https://i.imgur.com/4y9cZDw.png", "https://i.imgur.com/Id0kLlR.png"],
  "info": "This establishes the main-axis, thus defining the direction flex items are placed in the flex container. Using row organizes the items from left to right.",
  "family-member": "Parent",
  "model": "Flexbox"
}
const toggleShowInfoMock= jest.fn();

describe('Info', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Info 
        currentQuestion={question}
        showInfo={false}
        quizStarted={true}
        toggleShowInfo={toggleShowInfoMock}/>
    )
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should match the snapshot', () => {
    let wrapper = shallow(
      <Info 
        currentQuestion={question}
        showInfo={false}
        quizStarted={false}/>
    )
    expect(wrapper).toMatchSnapshot();
  })

  it('should match the snapshot', () => {
    let wrapper = shallow(
      <Info 
        currentQuestion={question}
        showInfo={true}
        quizStarted={false}/>
    )
    expect(wrapper).toMatchSnapshot();
  })

  it('should call toggleShowInfo when clicked', () => {
    wrapper.find('.show-more-info-p').simulate('click');
    expect(toggleShowInfoMock).toBeCalled();
  })
})