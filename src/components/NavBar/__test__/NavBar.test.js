import React from 'react';
import { shallow } from 'enzyme';
import NavBar from '..';

describe('<NavBar />', () => {
  it ('render without crashing', () => {
    shallow(<NavBar />);
  });
});