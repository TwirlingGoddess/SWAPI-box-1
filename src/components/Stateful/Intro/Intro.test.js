import React from 'react';
import { shallow, mount } from 'enzyme';
import Intro from './Intro';
import { mockPlanetApiResponse, mockVehicleApiResponse, mockPeopleApiResponse, mockPeopleObject } from '../../../_mocks_/mockData';

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

        it('throws an error if fetch fails', async () => {
          expect(renderedComponent.state('errorStatus')).toEqual('Error adding grocery')
          expect(window.fetch).rejects.toEqual('error');
        })
      })

    })
  })


});