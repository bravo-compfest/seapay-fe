import React from 'react';
import { shallow } from 'enzyme';
import RoleTab from '..';

describe('<RoleTab />', () => {
  it ('render without crashing', () => {
    shallow(<RoleTab />);
  });
});