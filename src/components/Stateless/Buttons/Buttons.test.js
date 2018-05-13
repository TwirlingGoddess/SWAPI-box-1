import React from 'react';
import { shallow, mount } from 'enzyme';
import Buttons from './Buttons';


describe('Buttons', () => {
  let buttons
  let apiCall

  beforeEach(() => {
    apiCall = jest.fn()
    buttons = shallow(<Buttons apiCall={apiCall}/>);
  })
  it('matches snapshot', () => {
    expect(buttons).toMatchSnapshot()
  })

  it('should call apiCall on click', () => {
    expect(apiCall).toHaveBeenCalledTimes(0);
    buttons.find('.people').simulate('click')
    expect(apiCall).toHaveBeenCalledTimes(1);
    
  })
})