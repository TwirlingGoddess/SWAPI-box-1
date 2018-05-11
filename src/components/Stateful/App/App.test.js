// import React from 'react';
// import App from './App';
// import { shallow } from 'enzyme';
// global.window = {};
// import localStorage from 'mock-local-storage';
// window.localStorage = global.localStorage;

// window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
//   json: () => Promise.resolve({
//   })
// }))

// describe ('App', () => {
//   let app;

//   beforeEach(() => {
//     app = shallow(<App /> );
//   });

//   it('matches snapshots', () => {
//     expect(app).toMatchSnapshot()
//   })

//   describe('apiCall', () => {
//     it('sets changes the loading state on load', () => {
//       app.instance().apiCall();
//       expect(app.state().loading).toEqual(true)
//     })
//   })

// })