import React from 'react';
import { shallow, mount } from 'enzyme';
import CardDetails from '../CardDetails/CardDetails';

let mockProps = {
  data:{},
  id: 2,
  clicked: false,
  findCard: jest.fn()
};

describe('Card', () => {
  let cardDetails;
  
  beforeEach(() => {
   cardDetails = shallow(<CardDetails />, { disableLifecycleMethods: true });
  })

  it('matches snapshot', () => {
    expect(cardDetails).toMatchSnapshot();
  })

  it(" has a class of 'selectedCard' ", () => {
    const selectedStyle = cardDetails.find('.card');
    expect(selectedStyle.hasClass('selected')).toEqual(true);
  });
});
