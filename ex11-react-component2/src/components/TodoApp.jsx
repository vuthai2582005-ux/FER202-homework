import React, { useState } from 'react';

function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (input.trim() !== '') {
      setTasks([...tasks, input]);
      setInput('');
    }
  };

  const deleteTask = (indexToDelete) => {
    setTasks(tasks.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div className="card shadow-sm p-4 mb-4">
        <h3 className="card-title text-primary mb-3">1. To-Do List Application</h3>
      
        {/* Input Group của Bootstrap */}
        <div className="input-group mb-3">
            <input
            type="text"
            placeholder="Enter a new task..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            />
            <button className="btn btn-primary" onClick={addTask}>
            Add List
            </button>
        </div>

        {/* Danh sách List Group */}
        <ul>
            {tasks.map((task, index) => (
                <li>
                <span>{task}</span>
                <button className="btn btn-danger btn-sm" onClick={() => deleteTask(index)}>
                    Delete
                </button>
                </li>
            ))}
        </ul>
    </div>
  );
}

export default TodoApp;