import React from 'react';
import { shallow, mount } from 'enzyme';
import CardDisplay from './CardDisplay';

describe('CardDisplay', () => {
  let cardDisplay

  beforeEach(() => {
    cardDisplay = shallow(<CardDisplay />, { disableLifecycleMethods: true });
  })

  it('matches snapshot', () => {
    expect(cardDisplay).toMatchSnapshot()
  })
})
