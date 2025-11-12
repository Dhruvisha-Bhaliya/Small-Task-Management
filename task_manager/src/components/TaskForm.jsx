import React, { useState } from 'react'

const TaskForm = ({ addTask }) => {
  const [taskName, setTaskName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    addTask(taskName)
    setTaskName('')
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a new task..."
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <button type="submit" disabled={!taskName.trim()}>
        Add Task
      </button>
    </form>
  )
}

export default TaskForm;
