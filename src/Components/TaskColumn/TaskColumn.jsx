import React from 'react';
import TaskCard from '../TaskCard/TaskCard';
import './TaskColumn.css';

const TaskColumn = ({ status, tasks, onDropTask, onEdit, onDelete }) => {
  const handleDragOver = (e) => e.preventDefault();

  const handleDrop = (e) => {
    const taskId = parseInt(e.dataTransfer.getData('taskId'));
    onDropTask(taskId, status);
  };

  return (
    <div className="task-column" onDragOver={handleDragOver} onDrop={handleDrop}>
      <h3>{status.toUpperCase()}</h3>
      {tasks.map(task => (
        <TaskCard 
          key={task.id} 
          task={task} 
          onEdit={onEdit} 
          onDelete={onDelete} 
        />
      ))}
    </div>
  );
};

export default TaskColumn;
