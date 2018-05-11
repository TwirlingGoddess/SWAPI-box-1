import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

global.localStorage = jest.fn()
localStorage.instance.getItem = jest.fn()

describe ('App', () => {
  let app;

  beforeEach(() => {
    app = shallow(<App /> );
  });

  it('matches snapshots', () => {
    expect(app).toMatchSnapshot()
  })

  // it('renders without crashing', () => {

  // });

})