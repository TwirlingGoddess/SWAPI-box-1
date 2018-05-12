import React from 'react';
import { makeApiCall, apicall } from './Helper';
import { shallow } from 'enzyme';
import { mockPlanetApiResponse, mockVehicleApiResponse, mockPeopleApiResponse } from '../../_mocks_/mockData';
/* eslint-env mocha */

describe('makeApiCall', () => {

  beforeEach(()=> { 
    window.fetch = jest.fn().mockImplementation(() => 
      Promise.resolve({ 
        status: 200,
        ok: true,
        json: () => Promise.resolve({ mockPeopleApiResponse })
      })
    )
  });

  it('should match snapshot', async () => {
    await expect(helper.makeApiCall).toMatchSnapshot()
  })

  it.only('calls apicall function', async () => {
    const category = 'planets'
    makeApiCall('people')
    expect(apicall).toHaveBeenCalled();
  });

  // it('calls apiCall', async () => {
  //   // apiCall.mockImplementation(() => Promise.resolve(fetchedPeopleData));
  //   await makeApiCall();
  //   await expect(apiCall).toHaveBeenCalledTimes(1);
  // });

  // describe('apiCall', () => {
  //   beforeEach(() => {
  //     const fetchURL = window.fetch()
  //   })
  //   it('calls fetch', async () => {
  //     const url = 'https://swapi.co/api/people';
  //     await makeApiCall(url)
  //     await expect(window.fetch).toHaveBeenCalledTimes(1)

  //   })

  //   it('calls saveToLocalStorage', () => {
      
  //   });
    
  //   it('saves to local storage', () => {
      
  //   });
    
  //   it('returns clean data', () => {
      
  //   });
    
  // })

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