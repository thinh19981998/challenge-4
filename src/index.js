import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';

const sampleTodo = [
  {
    id: 'todo-1',
    name: 'Coding challenges',
    completed: true,
  },
  {
    id: 'todo-2',
    name: 'Coding challenges',
    completed: false,
  },
  {
    id: 'todo-3',
    name: 'Coding challenges',
    completed: true,
  },
];

ReactDOM.render(
  <React.StrictMode>
    <App data={sampleTodo} />
  </React.StrictMode>,
  document.getElementById('root')
);
