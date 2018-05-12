import React from 'react';
import Helper from './Helper';
import { shallow } from 'enzyme';
import { mockPlanetApiResponse, mockVehicleApiResponse, mockPeopleApiResponse } from '../../_mocks_/mockData';
/* eslint-env mocha */

describe('makeApiCall', () => {
let helper

  beforeEach(()=> { 
    helper = new Helper()
    window.fetch = jest.fn().mockImplementation(() => 
      Promise.resolve({ 
        status: 200,
        ok: true,
        json: () => Promise.resolve({ mockPeopleApiResponse })
      })
    )
});

it('calls apicallHelper function', async () => {
    helper.apiCallHelper = jest.fn()
    const category = 'planets'
    helper.makeApiCall(category)
    expect(helper.apiCallHelper).toHaveBeenCalled();
  });

  it('calls apiCallHelper function with the correct url', async () => {
    helper.apiCallHelper = jest.fn()
    const category = 'planets'
    helper.makeApiCall(category)
    expect(helper.apiCallHelper).toHaveBeenCalledWith('https://swapi.co/api/planets');
  });

  describe('apiCall', () => {
    beforeEach(() => { 
      
      helper = new Helper()
      window.fetch = jest.fn().mockImplementation(() => 
        Promise.resolve({ 
          status: 200,
          ok: true,
          json: () => Promise.resolve({ mockPeopleApiResponse })
        })
      )
    })

    it('calls fetch', () => {
      const url = 'https://swapi.co/api/people';
      helper.apiCallHelper(url)
      expect(window.fetch).toHaveBeenCalledTimes(1);
      expect(window.fetch).toHaveBeenCalledWith(url);
    })

    it('calls cleanData', async () => {
      helper.cleanDataFunc = jest.fn()
      const url = 'https://swapi.co/api/people';      
      await helper.apiCallHelper(url)
      await expect(helper.cleanDataFunc).toHaveBeenCalled();  
    });
    
    it('saves to local storage', async () => {
      helper.sendToLocalStorage = jest.fn()
      helper.cleanDataFunc = jest.fn()      
      const url = 'https://swapi.co/api/people';      
      await helper.apiCallHelper(url)
      await expect(helper.sendToLocalStorage).toHaveBeenCalled();  
    });
    
    it('returns clean data', () => {
      
    });
    
  })

  // describe('cleanData', () => {

  //   it('returns an object with the correct information', () => {
    
  //   });
  // });

  // describe('peopleObject', () => {

  //   it('returns a people object', () => {
    
  //   });
  // });

  // describe('planetObject', () => {

  //   it('returns a planet object', () => {
    
  //   });
  // });

  // describe('nestedFetch', () => {

  //   it('returns an object with the correct information', () => {
    
  //   });
  // });

  // describe('residentsFetch', () => {

  //   it('returns an object with the correct information', () => {
    
  //   });
  // });

  // describe('sendToLocalStorage', () => {

  //   it('saves to local storage', () => {
    
  //   });
  // });

  // describe('getFromLocalStorage', () => {

  //   it('retrieves info from local storage ', () => {
    
  //   });
  // });
});