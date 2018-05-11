import React from 'react'
import Helper from './Helper'
import { shallow } from 'enzyme';


describe('helper', () => {
  let helper
  let mockPeopleObject 
  let cleanData

  beforeEach(()=> {
    
    helper = shallow(<Helper /> )
    mockPeopleObject = [{
      id: 'people1', 
      keyList: 'people',
      Homeworld: 'Tatooine', 
      Population: 200000, 
      Specie: 'Human', 
      Name:'Luke Skywalker'
    }, 
    { id: 'people2', 
      keyList: 'people',
      Homeworld: 'Tatooine', 
      Population: 200000, 
      Specie: 'Droid', 
      Name:'C-3PO'
    }]

    helper.instance().cleanData = jest.fn();
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve({
        cleanData: mockPeopleObject
      })
    }));
    

  })

  it.only('calls fetch with the correct data', async () => {
    const expected = ['https://swapi.co/api/people']
    helper.instance().makeApiCall('people')
    expect(window.fetch).toHaveBeenCalledWith('https://swapi.co/api/people')
  })

  it('calls cleandata', () => {

  })

  it('calls saveToLocalStorage', () => {

  })

  it('saves to local storage', () => {
    
  })

  it('returns clean data', () => {
    
  })

  describe('cleanData', () => {

    it('returns an object with the correct information', () => {
    
    })
  })

  describe('peopleObject', () => {

    it('returns a people object', () => {
    
    })
  })

  describe('planetObject', () => {

    it('returns a planet object', () => {
    
    })
  })

  describe('nestedFetch', () => {

    it('returns an object with the correct information', () => {
    
    })
  })

  describe('residentsFetch', () => {

    it('returns an object with the correct information', () => {
    
    })
  })

  describe('sendToLocalStorage', () => {

    it('saves to local storage', () => {
    
    })
  })

  describe('getFromLocalStorage', () => {

    it('retrieves info from local storage ', () => {
    
    })
  })
})