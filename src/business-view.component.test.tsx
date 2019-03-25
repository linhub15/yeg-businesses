import React from 'react';
import ReactDOM from 'react-dom';
import BusinessView from './business-view.component';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BusinessView />, div);
    ReactDOM.unmountComponentAtNode(div);
  });