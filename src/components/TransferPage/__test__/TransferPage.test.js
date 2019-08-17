import React from 'react';
import ReactDOM from 'react-dom';
import TransferPage from '..';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TransferPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});