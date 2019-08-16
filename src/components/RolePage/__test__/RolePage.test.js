import React from 'react';
import { shallow } from 'enzyme';
import RolePage from '..';

describe('<RolePage />', () => {
  it ('render without crashing', () => {
    shallow(<RolePage />);
  });
});