import TaskItem from "./TaskItem"
import EditTaskForm from "./EditTaskForm"
import { useState } from "react"

const TaskList = ({tasks , showIncompleteOnly , toggleTaskDone , deleteTask , updateTask}) => {
  const [editingTaskId, setEditingTaskId] = useState(null);

  return (
    <div className="flex flex-col gap-3 bg-gray-500/70 w-8/12 h-8/12 overflow-auto m-auto rounded-2xl p-4">
        {tasks.filter((task) => !showIncompleteOnly || !task.done).map((task)=>(
            <li className="list-none border-b-2 " key={task.id}>
            {editingTaskId === task.id ? (
              <EditTaskForm task={task} setEditingTaskId={setEditingTaskId} updateTask={updateTask}/>
            ) : (
              <TaskItem task={task} toggleTaskDone={toggleTaskDone} deleteTask={deleteTask} setEditingTaskId={setEditingTaskId}/>
            )}
            </li>
        ))}
    </div>
  )
}

export default TaskList 