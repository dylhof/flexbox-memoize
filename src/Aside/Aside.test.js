import React from 'react';
import Aside from './Aside';
import { shallow } from 'enzyme';

describe('Aside', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Aside />
    )
  });

  it('should match the snapshot', ())
})