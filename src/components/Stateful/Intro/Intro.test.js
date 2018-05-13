import React from 'react';
import { shallow, mount } from 'enzyme';
import Intro from './Intro';
import { mockPeopleApiResponse, mockPeopleObject, filmCrawl, filmCrawlResponse } from '../../../_mocks_/mockData';

/* eslint-env mocha */

describe('Intro', () => {
  let intro;

  beforeEach(() => {
    intro = shallow(<Intro />, { disableLifecycleMethods: true });
    window.fetch = jest.fn()
  });
  it('matches snapshot', () => {
    expect(intro).toMatchSnapshot();
  });

  describe('componentDidMount', () => {
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

      it('calls fetch with the correct data', () => {
        const url = 'https://swapi.co/api/films';        
        intro.instance().componentDidMount()
        expect(window.fetch).toHaveBeenCalledWith('https://swapi.co/api/films')
      })
      
      describe('when the status is not ok', () => {
        it.only('throws an error if fetch fails', async () => {
          window.fetch.mockImplementation(() => Promise.reject(new Error('Error')));
          const expected = new Error('Error');
          await expect(intro.instance().componentDidMount()).rejects.toEqual(expected);
        })
      })
    })

    describe('randomOpeningCrawl', () => {

      it.only('sets intro state', () => {
        const expected = "There is unrest in the Galactic"
        intro.instance().randomOpeningCrawl(filmCrawlResponse)
        expect(intro.state().randomCrawl).toEqual(expected)
        expect(intro.state().crawlTitle).toEqual('Movie Title')
        
      })
    })
  })

});