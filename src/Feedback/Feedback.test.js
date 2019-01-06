import React from 'react';
import Feedback from './Feedback';
import { shallow } from 'enzyme';

describe('Feedback', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Feedback message='Correct'/>
    )
  })

  
})