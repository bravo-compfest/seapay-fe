import React from 'react';
import { shallow } from 'enzyme';
import TabPanel from '..';

describe('<TabPanel />', () => {
  it ('render without crashing', () => {
    shallow(<TabPanel value="Item One" index={0} />);
  }); 
});