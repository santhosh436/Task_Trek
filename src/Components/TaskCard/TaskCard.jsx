import React from 'react';
import './TaskCard.css';

const TaskCard = ({ task, onEdit, onDelete }) => {
  const handleDragStart = (e) => {
    e.dataTransfer.setData('taskId', task.id);
  };

  return (
    <div className="task-card" draggable onDragStart={handleDragStart}>
      <p className="task-text">{task.text}</p>
      <div className="task-card-buttons">
        <button onClick={() => onEdit(task)}>Edit</button>
        <button onClick={() => onDelete(task.id)}>Delete</button>
      </div>
    </div>
  );
};

export default TaskCard;
