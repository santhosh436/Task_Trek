import React from 'react';
import './TaskInput.css';

const TaskInput = ({ input, setInput, status, setStatus, tag, setTag, onAdd, editMode }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    onAdd(input, status, tag); // Will add or edit based on `editMode`
    setInput('');
    setTag('');
    setStatus('todo');
  };

  return (
    <form className="task-input" onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter task"
      />
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="todo">To Do</option>
        <option value="doing">Doing</option>
        <option value="completed">Completed</option>
      </select>
    
      <button type="submit">{editMode ? 'Update Task' : 'Add Task'}</button>
    </form>
  );
};

export default TaskInput;
