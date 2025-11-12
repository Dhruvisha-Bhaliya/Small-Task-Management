import React, { useState } from 'react'
import TaskForm from './TaskForm'
import TaskList from './TaskList'

const TaskManager = () => {
  const [tasks, setTasks] = useState([])
  const [nextId, setNextId] = useState(1)

  const addTask = (name) => {
    if (!name.trim()) return
    const newTask = { id: nextId, name: name.trim(), completed: false }
    setTasks([...tasks, newTask])
    setNextId(nextId + 1)
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id))
  }

  const toggleTask = (id) => {
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    )
  }

  return (
    <div className="task-manager">
      <h1 className="app-title">Task Manager</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} toggleTask={toggleTask} />
    </div>
  )
}

export default TaskManager;
