import { useState } from "react"
import TaskControls from "./components/TaskControls"
import TaskForm  from "./components/TaskForm"
import TaskList from "./components/TaskList"
import { getSavedData, updateLOcalStorage } from "./utils/LocalStorage"


const App = () => {
  const [tasks, setTasks] = useState(getSavedData());

  const [showIncompleteOnly, setShowIncompleteOnly] = useState(false);
  const addTask = (newTask)=>
  {
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    updateLOcalStorage(updatedTasks);
  }

  const sortedTasks = () => {
    const sorted = [...tasks].sort((a, b) => a.priority - b.priority);
    setTasks(sorted);
    updateLOcalStorage(sorted);
  }

  const toggleTaskDone = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, done: !task.done } : task
    );
    setTasks(updatedTasks);
  }

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    updateLOcalStorage(updatedTasks);
  }


  const updateTask = (taskId, updatedText, updatedPriority) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, text: updatedText, priority: updatedPriority } : task
    );
    setTasks(updatedTasks);
    updateLOcalStorage(updatedTasks);
  }

  return (
    <div className="bg-gray-300 min-h-screen w-full pt-8">
      <TaskForm addTask={addTask} />
      <TaskControls  showIncompleteOnly={showIncompleteOnly} setShowIncompleteOnly={setShowIncompleteOnly} sortedTasks={sortedTasks} />
      <TaskList  tasks={tasks} showIncompleteOnly={showIncompleteOnly}  toggleTaskDone={toggleTaskDone} deleteTask={deleteTask} updateTask={updateTask}/>
    </div>
    
  )
}

export default App