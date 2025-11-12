import React from 'react'
import TaskItem from './TaskItem'

const TaskList = ({ tasks, deleteTask, toggleTask }) => {
  if (tasks.length === 0)
    return <div className="no-tasks">No tasks yet. Add one to get started!</div>

  return (
    <div className="task-list">
      {tasks.map((t) => (
        <TaskItem
          key={t.id}
          task={t}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
        />
      ))}
    </div>
  )
}

export default TaskList;
