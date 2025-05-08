import React, { useState } from 'react';
import TaskInput from '../TaskInput/TaskInput';
import TaskColumn from '../TaskColumn/TaskColumn';
import './TaskBoard.css';

const TaskBoard = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');
  const [status, setStatus] = useState('todo');
  const [tag, setTag] = useState('');
  const [currentEditId, setCurrentEditId] = useState(null);
  const [currentEditTag, setCurrentEditTag] = useState('');

  const addTask = (text, status, tag) => {
    if (currentEditId) {
      // Edit mode
      setTasks(tasks.map(task =>
        task.id === currentEditId ? { ...task, text, tag, status } : task
      ));
      setCurrentEditId(null);
      setInput('');
      setTag('');
    } else {
      // Add new task
      const newTask = {
        id: Date.now(),
        text,
        status,
        tag,
      };
      setTasks([...tasks, newTask]);
    }
  };

  const updateTaskStatus = (taskId, newStatus) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, status: newStatus } : task
    ));
  };

  const handleEditTask = (task) => {
    setInput(task.text);
    setCurrentEditId(task.id);
    setCurrentEditTag(task.tag);
    setTag(task.tag);
    setStatus(task.status);
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const columns = ['todo', 'doing', 'completed'];

  return (
    <div className="task-board">
      <h2>Task Trek Board</h2>
      <TaskInput
        input={input}
        setInput={setInput}
        status={status}
        setStatus={setStatus}
        tag={tag}
        setTag={setTag}
        onAdd={addTask}
        editMode={currentEditId !== null}
      />
      <div className="columns">
        {columns.map((col) => (
          <TaskColumn
            key={col}
            status={col}
            tasks={tasks.filter(task => task.status === col)}
            onDropTask={updateTaskStatus}
            onEdit={handleEditTask}
            onDelete={handleDeleteTask}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskBoard;
