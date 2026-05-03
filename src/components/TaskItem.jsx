import { Pencil , Trash2 } from 'lucide-react';


const TaskItem = ({task, toggleTaskDone, deleteTask, setEditingTaskId}) => {
  return (
    <div className=" flex justify-between text-xl  font-semibold">
        <span className='flex gap-2 w-8/12'>
        <input type="checkbox" checked={task.done} onChange={() => toggleTaskDone(task.id)} className="w-6 h-6 rounded-2xl m-1 cursor-pointer"/>
        <li className={ `${task.done ? "line-through" : ""} `}>{task.text}  </li>
        </span>
        <p>Priority: {task.priority}</p>
        <p>Done: {task.done ? "Yes" : "No"}</p>
        <Pencil  className="cursor-pointer hover:text-red-800 rounded h-6 w-6" onClick={() => setEditingTaskId(task.id)} />
        <Trash2  className="cursor-pointer hover:text-red-800 rounded h-6 w-6" onClick={() => deleteTask(task.id)}  />
    </div>
  )
}

export default TaskItem