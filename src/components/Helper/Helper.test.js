import React from 'react';
import Helper from './Helper';
import { shallow } from 'enzyme';
import { 
  mockVehicleApiResponse, 
  mockPeopleApiResponse, 
  mockPeopleObject, 
  mockParseData, 
  vehicleData,
  planetData,
  parsedVehicleData,
  parsedPlanetData, 
  mockVehicles } from '../../_mocks_/mockData';
/* eslint-env mocha */  

describe('Helper', () => { 
  let helper;
  const url = 'https://swapi.co/api/people';

  beforeEach(()=> { 
    helper = new Helper();
    window.fetch = jest.fn();
  });

  describe('makeApiCall', () => {
    describe('when the status is ok', () => {
      beforeEach(() => {
        window.fetch.mockImplementation(() => {
          return Promise.resolve({ 
            status: 200,
            ok: true,
            json: () => Promise.resolve( mockPeopleApiResponse )
          });
        });
      }); 
      
      it('saves to local storage', async () => {
        
        helper.sendToLocalStorage = jest.fn();
        await helper.makeApiCall('people');
        await expect(helper.sendToLocalStorage).toHaveBeenCalledWith(url, mockPeopleObject);

      });

      it('returns clean data', async () => {

        helper.sendToLocalStorage = jest.fn();
        const cleanData = await helper.makeApiCall('people');
        await expect(cleanData).toEqual(mockPeopleObject);
      });

      it('returns the correct Data', async () => {

        window.fetch.mockImplementation(() => {
          return Promise.resolve({ 
            status: 200,
            ok: true,
            json: () => Promise.resolve( mockVehicleApiResponse )
          });
        })  
        helper.sendToLocalStorage = jest.fn();
        const cleanData = await helper.makeApiCall('vehicles');
        await expect(cleanData).toEqual(mockVehicles);
      });

      it('calls apicallHelper function with the correct parameters', async () => {
        
        helper.apiCallHelper = jest.fn();
        const category = 'planets';
        helper.makeApiCall(category);
        expect(helper.apiCallHelper).toHaveBeenCalled();
        expect(helper.apiCallHelper).toHaveBeenCalledWith('https://swapi.co/api/planets');
      });

      it('calls fetch with the correct parameters', () => {
        const url = 'https://swapi.co/api/people';
        helper.apiCallHelper(url);
        helper.sendToLocalStorage = jest.fn();        
        expect(window.fetch).toHaveBeenCalledTimes(1);
        expect(window.fetch).toHaveBeenCalledWith(url);
      });

      it('calls fetch with the correct parameters sad path', () => {
        const url = 'https://swapi.co/api/people';
        helper.apiCallHelper('google');
        helper.sendToLocalStorage = jest.fn();        
        expect(window.fetch).not.toHaveBeenCalledWith(url);
      });
    });

    describe('MakeApi call if the status is not ok', () => {
      it('throws an error if fetch fails', async () => {
        window.fetch = jest
          .fn()
          .mockImplementation(() => Promise.reject(new Error('Error')));
        const expected = new Error('Error');
    
        await expect(helper.apiCallHelper()).rejects.toEqual(expected);
      });
    });
  });

  describe('apiCall', () => {
    it('calls cleanData function', async () => {
      
      helper.cleanDataFunc = jest.fn();
      helper.sendToLocalStorage = jest.fn();              
      const url = 'https://swapi.co/api/people';      
      window.fetch.mockImplementation(() => {
        return Promise.resolve({ 
          status: 200,
          ok: true,
          json: () => Promise.resolve( mockPeopleApiResponse )
        });
      });
      await helper.apiCallHelper(url);
      
      await expect(helper.cleanDataFunc).toHaveBeenCalledWith(mockPeopleApiResponse);  
    });     
  });

  describe('cleanDataFunction', () => {

    it('should check the selected url and call the corresponding function', async () => {

      helper.vehicleObject = jest.fn();
      helper.cleanDataFunc(mockVehicleApiResponse);
      await expect(helper.vehicleObject).toHaveBeenCalled();
    });

    it('should not call the function that doesnt include the selected category', async () => {

      helper.peopleObject = jest.fn();
      helper.cleanDataFunc(mockVehicleApiResponse);
      await expect(helper.peopleObject).toHaveBeenCalledTimes(0);
    });
  });

  describe('peopleObject', () => {

    it('returns a clean people object', async () => {
      helper.nestedFetch = jest.fn().mockImplementation(() => {
        return 'Human';
      });
      const expected = mockPeopleObject;
      const result = await helper.peopleObject(mockParseData);
      expect(result).toEqual(expected);
    });
  });

  describe('vehicleObject', () => {
    it('returns a clean vehicle Object', async () => {
      helper.nestedFetch = jest.fn().mockImplementation(() => {
        return 'Sail barge';
      });
      const expected = vehicleData;
      const result = await helper.vehicleObject(parsedVehicleData);
      expect(result).toEqual(expected);  
    });
  });

  describe('planetObject', () => {
    it('return a clean planet Object', async () => {
      helper.residentsFetch = jest.fn().mockImplementation(() => {
        return 'Alderaan';
      });
      const expected = planetData;
      const result = await helper.planetObject(parsedPlanetData);
      expect(result).toEqual(expected);  
    });
  });

});

