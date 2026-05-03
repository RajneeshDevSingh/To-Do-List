import { useState } from "react"
import TaskControls from "./components/TaskControls"
import TaskForm  from "./components/TaskForm"
import TaskList from "./components/TaskList"


const App = () => {
  const [tasks, setTasks] = useState([
    {
      id:1,
      text:"Drink water jhgbbo umbi  fvljre uoef ",
      priority:6,
      done:false
    },
    {
      id:2,
      text:"Go to the gym",
      priority:2,
      done:true
    },
    {
      id:3,
      text:"Read a book",
      priority:3,
      done:false 
    },
    {
      id:4,
      text:"Learn React",
      priority:4,
      done:false
    },
    {
      id:5,
      text:"Write a blog post",
      priority:5,
      done:false
    }
  ]);

  const [showIncompleteOnly, setShowIncompleteOnly] = useState(false);
  const addTask = (newTask)=>
  {
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
  }

  const sortedTasks = () => {
    const sorted = [...tasks].sort((a, b) => a.priority - b.priority);
    setTasks(sorted);
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
  }


  const updateTask = (taskId, updatedText, updatedPriority) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, text: updatedText, priority: updatedPriority } : task
    );
    setTasks(updatedTasks);
  }

  return (
    <div className="bg-gray-500 h-screen w-screen">
      <TaskForm addTask={addTask} />
      <TaskControls  showIncompleteOnly={showIncompleteOnly} setShowIncompleteOnly={setShowIncompleteOnly} sortedTasks={sortedTasks} />
      <TaskList  tasks={tasks} showIncompleteOnly={showIncompleteOnly}  toggleTaskDone={toggleTaskDone} deleteTask={deleteTask} updateTask={updateTask}/>
    </div>
    
  )
}

export default App