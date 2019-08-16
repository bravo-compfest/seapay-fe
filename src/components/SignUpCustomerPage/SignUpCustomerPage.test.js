import React from 'react';
import ReactDOM from 'react-dom';
import SignUpCustomerPage from './SignUpCustomerPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SignUpCustomerPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});