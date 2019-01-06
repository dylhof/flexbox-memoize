import React from 'react';
import Header from './Header';
import { shallow } from 'enzyme';

describe('Header', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Header />
    )
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should toggle showInstructions', () => {
    expect(wrapper.state('showInstructions')).toEqual(false);
    wrapper.instance().toggleShowInstructions();
    expect(wrapper.state('showInstructions')).toEqual(true);
    wrapper.instance().toggleShowInstructions();
    expect(wrapper.state('showInstructions')).toEqual(false);
  })
})