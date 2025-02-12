import React, { useState } from 'react';
import './App.css'; 

interface Todo {
  text: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (!input.trim()) return;
    setTodos([...todos, { text: input, completed: false }]);
    setInput('');
  };

  const toggleTodo = (index: number) => {
    const newTodos = todos.map((todo, idx) =>
      idx === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
  };

  return (
    <div className="container">
      <h1>Todo App</h1>
      <div className="input-group">
        <input
          type="text"
          placeholder="Enter a todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <ul className="todo-list">
        {todos.map((todo, idx) => (
          <li
            key={idx}
            onClick={() => toggleTodo(idx)}
            className={`todo-item ${todo.completed ? 'completed' : ''}`}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
