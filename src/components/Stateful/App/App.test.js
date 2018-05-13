import React from 'react';
import App from './App';
import Helper from '../../Helper/Helper'
import { shallow } from 'enzyme';
import { mockPeopleApiResponse, mockPeopleObject } from '../../../_mocks_/mockData';
import 'jest-localstorage-mock'

describe('app', () => {
  let app
  let helper
  it('matches snapshot', () => {
    expect(app).toMatchSnapshot()
  })

  describe('apiCall', () => {

    beforeEach(() => {
      app = shallow(<App />, { disableLifecycleMethods: true })
      helper = new Helper()
      window.fetch = jest.fn()
      helper.sendToLocalStorage = jest.fn()
    })

    it('should update the state', async () => {

      // window.fetch.mockImplementation(() => {
      //   return Promise.resolve({ 
      //     status: 200,
      //     ok: true,
      //     json: () => Promise.resolve( mockPeopleApiResponse )
      //   })
      // })
      // helper.sendToLocalStorage = jest.fn()
      // helper.makeApiCall = jest.fn()

      // await app.instance().apiCall()
    })
  })

  describe('componenDidMount', () => {
    it('should set the state if there is something is local storage', () => {
      app.instance().componentDidMount()
      expect(app.state().favorites).toHaveLength(0)
    })
  })

  describe('FindCard', () => {
    let selectedCard    

    beforeEach(() => {
      
    })
    it('finds the selected card and pushes it to the favorites array', () => {
      selectedCard = {id: "people0", keyList: "people", Homeworld: "Tatooine", Population: "200000", Specie: "Human"} 
      app.instance().findCard(selectedCard)
      expect(app.state().favorites).toHaveLength(1)
    })

    it('calls addToFavorites ', () => {
      app.instance().addCardToFavorites = jest.fn()
      app.instance().findCard(selectedCard)
      expect(app.instance().addCardToFavorites).toHaveBeenCalled()
    })
  })

  describe('addCardFavorites', () => {
    let selectedCard    

    it('checks for duplicates', () => {
      const expectedResult = mockPeopleObject
      app.setState({
        favorites: mockPeopleObject
      })
      selectedCard = {id: "people0", keyList: "people", Homeworld: "Tatooine", Population: "200000", Specie: "Human"} 
      app.instance().addCardToFavorites(selectedCard)
      expect(app.state().favorites).toEqual(expectedResult);
    })
  })

  describe('displayFavorites', () => {
    let selectedCard    

    it('checks for duplicates', () => {
      const expectedResult = mockPeopleObject
      app.setState({
        favorites: mockPeopleObject
      })
      app.instance().displayFavorites()
      expect(app.state().selectedData).toEqual(expectedResult)

    })
  })

})
