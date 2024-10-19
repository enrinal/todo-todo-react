// src/App.js
import React from 'react';
import TodoList from './Component/TodoList';

function App() {
  return (
      <div className="App container mx-auto p-4">
        <h1 className="text-2xl font-bold text-center mb-4">Todo List</h1>
        <TodoList/>
      </div>
  );
}

export default App;