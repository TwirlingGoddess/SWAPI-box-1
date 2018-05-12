import React from 'react';
import { makeApiCall, cleanDataFunc } from './Helper';
import { shallow } from 'enzyme';
import { fetchedPeopleData } from '../../_mocks_/mockData';

jest.autoMockOn()

  describe ('makeApiCall', () => {

  beforeEach(()=> { 
    jest.resetAllMocks();
    window.fetch = jest.fn().mockImplementation(() => {
      Promise.resolve({ json: () => Promise.resolve({
        data: 'mock'
      })
      })
    })
  });

  it('should match snapshot', async () => {
    await expect(makeApiCall).toMatchSnapshot()
  })

  it('calls fetch with the correct data', async () => {
    const expectedFetchBody = {
      method: 'GET',
      body: JSON.stringify({ result: fetchedPeopleData }),
      headers: {
        'Content-Type': 'application/json'
      }
    }
    const url = 'https://swapi.co/api/people'
    const fetchURL = window.fetch(url) 
    expect(window.fetch).toHaveBeenCalled();
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