import React from 'react';
import { shallow, mount } from 'enzyme';
import CardDisplay from './CardDisplay';
import Card from '../Card/Card'
/* eslint-env mocha */

const mockProps = {
  selectedData: [],
  findCard: jest.fn(),
  favorites: []
}

describe('CardDisplay', () => {
  let cardDisplay

  beforeEach(() => {
    cardDisplay = shallow(<CardDisplay {...mockProps}/>, { disableLifecycleMethods: true });
  })

  it('matches snapshot', () => {
    expect(cardDisplay).toMatchSnapshot()
  })

  it('renders the card component', () => {
    expect(cardDisplay.find(Card))
  })
})
