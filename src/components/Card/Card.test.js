import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

describe('<Card />', () => {
  it ('contains h1 in card', () => {
    const card = shallow(<Card />);
    expect(card.find('h1').length).toEqual(1);
  });
});
