import React from 'react';
import { shallow } from 'enzyme';
import TabbedCard from '..';

describe('<TabbedCard />', () => {
  it ('render without crashing', () => {
    shallow(<TabbedCard />);
  }); 
});