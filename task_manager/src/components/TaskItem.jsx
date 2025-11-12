import React from 'react'

const TaskItem = ({ task, deleteTask, toggleTask }) => {
  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div className="left-section">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
        />
        <span className="task-name" onClick={() => toggleTask(task.id)}>
          {task.name}
        </span>
      </div>
      <button className="delete-btn" onClick={() => deleteTask(task.id)}>
        Delete
      </button>
    </div>
  )
}

export default TaskItem;
