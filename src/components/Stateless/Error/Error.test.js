import React from 'react';
import { shallow, mount } from 'enzyme';
import Error from './Error';


describe ('', () => {
let error;
  beforeEach(() => {
    error = shallow(<Error />);
  });

  it('matches snapshot', () => {
    expect(error).toMatchSnapshot();
  });


});