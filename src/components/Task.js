import React from 'react';

const Task = ({ task, toggleComplete, deleteTask }) => {
  return (
    <div className={`task ${task.completed ? 'completed' : ''}`}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <div className="task-actions">
        <button onClick={() => toggleComplete(task.id)}>
          {task.completed ? 'Mark as Pending' : 'Mark as Complete'}
        </button>
        <button onClick={() => deleteTask(task.id)} className="delete">
          Delete
        </button>
      </div>
    </div>
  );
};

export default Task;
