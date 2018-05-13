import React from 'react';
import { shallow, mount } from 'enzyme';
import Buttons from './Buttons';


describe('Buttons', () => {
  let buttons
  let apiCall
  let displayFavorites

  beforeEach(() => {
    apiCall = jest.fn()
    displayFavorites = jest.fn()
    buttons = shallow(<Buttons apiCall={apiCall} displayFavorites={displayFavorites}/>);
  })
  it('matches snapshot', () => {
    expect(buttons).toMatchSnapshot()
  })

  it('should call apiCall on click', () => {
    expect(apiCall).toHaveBeenCalledTimes(0);
    buttons.find('.people').simulate('click')
    expect(apiCall).toHaveBeenCalledTimes(1);
    
  })

  it('should call displayFavorites on click', () => {
    expect(displayFavorites).toHaveBeenCalledTimes(0);
    buttons.find('.favorite').simulate('click')
    expect(displayFavorites).toHaveBeenCalledTimes(1);
  })
})