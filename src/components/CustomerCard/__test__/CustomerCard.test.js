import React from 'react';
import { shallow } from 'enzyme';
import CustomerCard from '..';

describe('<CustomerCard />', () => {
  it ('render without crashing', () => {
    shallow(<CustomerCard />);
  });
});