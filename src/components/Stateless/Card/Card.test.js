import React from 'react';
import { shallow, mount } from 'enzyme';
import Card from './Card';

let mockProps = {
  data:{},
  id: 2,
  clicked: false,
  findCard: jest.fn()
};

describe('Card', () => {
  let card;
  
  beforeEach(() => {
    card = shallow(<Card {...mockProps} />, { disableLifecycleMethods: true });
  })

  it('matches snapshot', () => {
    expect(card).toMatchSnapshot();
  })

  it("doesn't have a class of 'clicked' if the card has not been selected", () => {
    mockProps.clicked = false;
    expect(card.hasClass('favoriteCard')).toEqual(false);
  });
  it("has a class of 'favoriteCard' if the card has been selected", () => {
    mockProps.clicked = true;
    card = shallow(<Card {...mockProps} />);
  
    expect(card.hasClass('favoriteCard')).toBe(true);
  });

  it('calls findCard when card is clicked', () => {
    let mockProps = {
      data:{},
      id: 2,
      clicked: false,
      findCard: jest.fn()
    };
    card = mount(<Card {...mockProps} />);
    card.find('.card').simulate('click');
    expect(card.prop('findCard')).toHaveBeenCalledTimes(1);

    it('it has a favoriteBar active class if its a favorite card', () => {
      mockProps.clicked= true
      const favBar = card.find('.favoriteActiveBar');
      expect(favBar.hasClass('.favoriteActiveBar')).toBe(true);
    });
  });
})

