import React from 'react';
import App from './App';
import Helper from '../../Helper/Helper';
import { shallow } from 'enzyme';
import { mockPeopleApiResponse, mockPeopleObject, mockPeopleObject2, mockFavorites } from '../../../_mocks_/mockData';
import 'jest-localstorage-mock';
/* eslint-env mocha */

describe('app', () => {
  let app;
  let helper;
  it('matches snapshot', () => {
    expect(app).toMatchSnapshot();
  });

  describe('apiCall', () => {

    beforeEach(() => {
      app = shallow(<App />, { disableLifecycleMethods: true });
      helper = new Helper();
      window.fetch = jest.fn();
      helper.sendToLocalStorage = jest.fn();
    });

    it('should update the state after getting the api response', async () => {

      window.fetch.mockImplementation(() => {
        return Promise.resolve({ 
          status: 200,
          ok: true,
          json: () => Promise.resolve( mockPeopleApiResponse )
        });
      });
      helper.sendToLocalStorage = jest.fn();
      helper.makeApiCall = jest.fn();

      await app.instance().apiCall();
      expect(app.state().loading).toEqual(false);
      expect(app.state().selectedData).toEqual(mockPeopleObject);     
            
    });
  });

  describe('componenDidMount', () => {
    it('should have a default of empty arrays if there is no data saved in local storage', () => {
      app.instance().componentDidMount();
      expect(app.state().favorites).toHaveLength(0);
    });
  });

  describe('FindCard', () => {
    let selectedCard;    

    it('finds the selected card and pushes it to the favorites array', () => {
      selectedCard = {id: "people0", keyList: "people", Homeworld: "Tatooine", Population: "200000", Specie: "Human"}; 
      app.instance().findCard(selectedCard);
      expect(app.state().favorites).toHaveLength(1);
    });

    it('calls addToFavorites ', () => {
      app.instance().addCardToFavorites = jest.fn();
      app.instance().findCard(selectedCard);
      expect(app.instance().addCardToFavorites).toHaveBeenCalled();
    });
  });

  describe('addCardFavorites', () => {
    let selectedCard;    

    it('checks for duplicates', () => {
      const expectedResult = mockPeopleObject;
      app.state().favorites = mockPeopleObject;
    
      selectedCard = {id: "people0", keyList: "people", Homeworld: "Tatooine", Population: "200000", Specie: "Human"}; 
      app.instance().addCardToFavorites(selectedCard);
      expect(app.state().favorites).toEqual(expectedResult);
    });

    it('adds cards to the favorites array', () => {
 
      app.instance().addCardToFavorites(mockPeopleObject2);
      expect(app.state().favorites).toEqual(mockPeopleObject);
    });
  });

  describe('displayFavorites', () => {
    let selectedCard;    

    it('updated the selectedData state to the favorites array', () => {
      const expectedResult = mockPeopleObject;
      app.setState({
        favorites: mockPeopleObject
      });
      app.instance().displayFavorites();
      expect(app.state().selectedData).toEqual(expectedResult);

    });
  });

});
