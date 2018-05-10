import React from 'react';
import { shallow, mount } from 'enzyme';
import Intro from './Intro';


describe ('', () => {
let intro;
  beforeEach(() => {
    intro = shallow(<Intro />);
  });

  it('matches snapshot', () => {
    expect(intro).toMatchSnapshot();
  });


});