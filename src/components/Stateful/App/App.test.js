import React from 'react';
import App from './App';
import { shallow, mount } from 'enzyme';

describe ('App', () => {
  let app;

  beforeEach(() => {
    app = shallow(<App />, { disableLifecycleMethods: true });
  });

  it('renders without crashing', () => {

  });

}