import React from 'react';
import { makeApiCall } from './Helper';
import { shallow } from 'enzyme';
jest.autoMockOn()

  describe ('makeApiCall', () => {
  let makeApiCall;
  let mockPeopleObject; 
 

  beforeEach(()=> {
    
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
    }];

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve({
        cleanData: mockPeopleObject
      })
    }));
    

  });

  it('should match snapshot', async () => {
    await expect(makeApiCall).toMatchSnapshot()
  })

  it.only('calls fetch with the correct data', async () => {
    const expected = ['https://swapi.co/api/people'];
    await makeApiCall('people');
    expect(window.fetch).toHaveBeenCalledWith('https://swapi.co/api/people');
  });

  it('calls cleandata', () => {

  });

  it('calls saveToLocalStorage', () => {

  });

  it('saves to local storage', () => {
    
  });

  it('returns clean data', () => {
    
  });

  describe('cleanData', () => {

    it('returns an object with the correct information', () => {
    
    });
  });

  describe('peopleObject', () => {

    it('returns a people object', () => {
    
    });
  });

  describe('planetObject', () => {

    it('returns a planet object', () => {
    
    });
  });

  describe('nestedFetch', () => {

    it('returns an object with the correct information', () => {
    
    });
  });

  describe('residentsFetch', () => {

    it('returns an object with the correct information', () => {
    
    });
  });

  describe('sendToLocalStorage', () => {

    it('saves to local storage', () => {
    
    });
  });

  describe('getFromLocalStorage', () => {

    it('retrieves info from local storage ', () => {
    
    });
  });
});