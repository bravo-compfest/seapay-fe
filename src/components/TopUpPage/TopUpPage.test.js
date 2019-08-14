import React from 'react';
import ReactDOM from 'react-dom';
import {TopUpPage} from './TopUpPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TopUpPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});