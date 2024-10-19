// src/TodoList.js
import React, {useEffect, useState} from 'react';
import Input from './Input';

function TodoList() {
  const [todos, setTodos] = useState([]);

  // Load todos from local storage when the component mounts
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos'));
    console.log(savedTodos);
    if (savedTodos) {
      if (savedTodos.length > 0) {
        setTodos(savedTodos);
      }
    }

  }, []);

  // Save todos to local storage whenever they change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]); // Runs every time todos changes

  // Function to add a new todo
  const addTodo = (newTodo) => {
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  // Function to delete a todo
  const deleteTodo = (index) => {
    setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index));
  };

  return (
      <div className="max-w-md mx-auto">
        <Input addTodo={addTodo}/>
        <ul className="mt-4 space-y-2">
          {todos.map((todo, index) => (
              <li
                  key={index}
                  className="flex justify-between items-center bg-gray-100 p-2 rounded shadow-sm"
              >
                {todo}
                <button
                    onClick={() => deleteTodo(index)}
                    className="bg-red-500 text-white p-1 rounded hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </li>
          ))}
        </ul>
      </div>
  );
}

export default TodoList;