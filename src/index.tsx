import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Category from './components/category-view.component'
import BusinessView from './components/business-view.component'
import BusinessListView from './components/business-list-view.component'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<BusinessListView />, document.getElementById('root'));
//ReactDOM.render(<BusinessView />, document.getElementById('root'));
//ReactDOM.render(<Category />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
