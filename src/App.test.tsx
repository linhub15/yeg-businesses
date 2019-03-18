import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
  ReactDOM.render(<App />, container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it('added Hubert was here', () => {
  const p = container.querySelector('#hubert');
  expect(p.textContent).toBe('Hubert');
});

it('added Ian was here', () => {
 const p = container.querySelector('#ian');
 expect(p.textContent).toBe('Ian'); 
})
