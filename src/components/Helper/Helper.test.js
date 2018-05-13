import React from 'react';
import Helper from './Helper';
import { shallow } from 'enzyme';
import { mockPlanetApiResponse, mockVehicleApiResponse, mockPeopleApiResponse, mockPeopleObject } from '../../_mocks_/mockData';
/* eslint-env mocha */  

describe('Helper', () => { 
  let helper
  const url = 'https://swapi.co/api/people'

  beforeEach(()=> { 
    helper = new Helper()
    window.fetch = jest.fn()
  });

  describe('makeApiCall', () => {
    describe('when the status is ok', () => {
      beforeEach(() => {
        window.fetch.mockImplementation(() => {
          return Promise.resolve({ 
            status: 200,
            ok: true,
            json: () => Promise.resolve( mockPeopleApiResponse )
          })
        })
      }) 
      
      it('saves to local storage', async () => {
        
        helper.sendToLocalStorage = jest.fn()
        await helper.makeApiCall('people')
        await expect(helper.sendToLocalStorage).toHaveBeenCalledWith(url, mockPeopleObject);

      });

      it('returns clean data', async () => {

        helper.sendToLocalStorage = jest.fn();
        const cleanData = await helper.makeApiCall('people')
        await expect(cleanData).toEqual(mockPeopleObject)
      })

      it('calls apicallHelper function', async () => {
        helper.apiCallHelper = jest.fn()
        const category = 'planets'
        helper.makeApiCall(category)
        expect(helper.apiCallHelper).toHaveBeenCalled();
        expect(helper.apiCallHelper).toHaveBeenCalledWith('https://swapi.co/api/planets');
      });

      it('calls fetch with the correct parameters', () => {
        const url = 'https://swapi.co/api/people';
        helper.apiCallHelper(url)
        helper.sendToLocalStorage = jest.fn();        
        expect(window.fetch).toHaveBeenCalledTimes(1);
        expect(window.fetch).toHaveBeenCalledWith(url);
      })
    })

    describe('MakeApi call if the status is not ok', () => {
      it('throws an error if fetch fails', async () => {
        window.fetch = jest
          .fn()
          .mockImplementation(() => Promise.reject(new Error('Error')));
        const expected = new Error('Error');
    
        await expect(helper.apiCallHelper()).rejects.toEqual(expected);
      });
    })
  })

  describe('apiCall', () => {
    it('calls cleanData', async () => {
      
      helper.cleanDataFunc = jest.fn()
      helper.sendToLocalStorage = jest.fn();              
      const url = 'https://swapi.co/api/people';      
      window.fetch.mockImplementation(() => {
        return Promise.resolve({ 
          status: 200,
          ok: true,
          json: () => Promise.resolve( mockPeopleApiResponse )
        })
      })
      await helper.apiCallHelper(url)
      
      await expect(helper.cleanDataFunc).toHaveBeenCalledWith(mockPeopleApiResponse);  
    })     
  })

  describe('cleanDataFunction', () => {

    it('should check the selected url and call the corresponding function', async () => {
      helper.vehicleObject = jest.fn();
      helper.cleanDataFunc(mockVehicleApiResponse)
      await expect(helper.vehicleObject).toHaveBeenCalled()
    })

    it('should not call the function that doesnt include the selected category', async () => {

      helper.peopleObject = jest.fn();
      helper.cleanDataFunc(mockVehicleApiResponse)
      await expect(helper.peopleObject).toHaveBeenCalledTimes(0)
    })
  })
})

