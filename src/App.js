import React from 'react';
import './App.css';
import Message from './components_hw1/Message';
import CommentsList from './components_hw2/CommentsList';
import TemperatureConverter from './components_hw3/TemperatureConverter';
import TodoList from './components_hw3/TodoList';

function App() {
  return (
    <div className="App">
      <h2>Start app</h2>
      <h3>Homework 1</h3>
      <Message text='Hello World!' />
      <h3>Homework 2</h3>
      <CommentsList />
      <h3>Homework 3</h3>
      <TemperatureConverter />
      <TodoList />
    </div>
  );
}

export default App;
