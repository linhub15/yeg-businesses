import React from 'react';
import ReactDOM from 'react-dom';
import BusinessListView from './business-list-view.component';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BusinessListView />, div);
  ReactDOM.unmountComponentAtNode(div);
});
