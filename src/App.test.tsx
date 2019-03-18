import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

<<<<<<< HEAD
let container;
=======

let container: HTMLDivElement;
>>>>>>> 4625637e6d668b94160544179d8f9fea09c1630a

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
  ReactDOM.render(<App />, container);
});

afterEach(() => {
  document.body.removeChild<HTMLDivElement>(container);
});

it('added Hubert was here', () => {
  const p = container.querySelector('#hubert') as HTMLParagraphElement;
  expect(p.textContent).toBe('Hubert');
});

it('added Ian was here', () => {
 const p = container.querySelector('#ian');
 expect(p.textContent).toBe('Ian'); 
})
