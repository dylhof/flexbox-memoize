import React from 'react';
import Instructions from './Instructions';
import { shallow } from 'enzyme';

const toggleShowInstructionsMock = jest.fn();

describe('Instructions', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Instructions 
        showInstructions={true}
        toggleShowInstructions={toggleShowInstructionsMock}/>
    )
  })
  
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})