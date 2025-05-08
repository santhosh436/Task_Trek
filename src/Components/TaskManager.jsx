import React, { useState } from 'react';
import './TaskManager.css';

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const handleAddOrEdit = () => {
    if (!input.trim()) return;

    if (isEditing) {
      setTasks(tasks.map(task => 
        task.id === editId ? { ...task, text: input } : task
      ));
      setIsEditing(false);
      setEditId(null);
    } else {
      const newTask = {
        id: Date.now(),
        text: input
      };
      setTasks([...tasks, newTask]);
    }

    setInput('');
  };

  const handleEdit = (id, text) => {
    setInput(text);
    setIsEditing(true);
    setEditId(id);
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="task-container">
      <h2>Task Trek</h2>
      <div className="task-input">
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a task"
        />
        <button onClick={handleAddOrEdit}>
          {isEditing ? 'Update' : 'Add'}
        </button>
      </div>
      <ul className="task-list">
        {tasks.map(task => (
          <li key={task.id}>
            <span>{task.text}</span>
            <div className="task-buttons">
              <button onClick={() => handleEdit(task.id, task.text)}>Edit</button>
              <button onClick={() => handleDelete(task.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;
