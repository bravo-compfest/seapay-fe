import React from 'react';
import { shallow } from 'enzyme';
import ItemCard from './ItemCard';
import Typography from '@material-ui/core/Typography';

describe('<ItemCard />', () => {
  it ('render without crashing', () => {
    shallow(<ItemCard />);
  });

  it ('contain typography in card', () => {
    const card = shallow(<ItemCard />);
    expect(card.find(<Typography />));
  });

  it ('contain specific text', () => {
    const card = shallow(<ItemCard />);
    expect(card.text()).toEqual('This is a card.');
  });
});
