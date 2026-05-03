import { BadgeCheck } from 'lucide-react';
import { useState } from "react"

const EditTaskForm = ({task, setEditingTaskId, updateTask}) => {
    const [editTask, setEditTask] = useState(task.text);
    const [editPriority, seteditPriority] = useState(task.priority);

    const saveEdit = () => {
        if(editTask.trim())
        {  
            updateTask(task.id, editTask, editPriority);
            setEditingTaskId(null);
        }
    };

  return (
    <div className='flex gap-2 items-center rounded-lg'>
        <input type="text" placeholder='Add a task' className='w-10/12 p-2 rounded-lg m-4 border-2 border-t-[(201, 24, 77)] border-solid'  value={editTask} onChange={(e) => setEditTask(e.target.value)} />
        <input type="number" min="1" max="100" placeholder='Priority' className='text-center p-2 rounded-lg m-4 border-2 border-t-[(201, 24, 77)] border-solid' value={editPriority} onChange={(e) => seteditPriority(e.target.value)} />
        <BadgeCheck className='cursor-pointer hover:text-green-800 rounded h-6 w-6' onClick={saveEdit}/>
    </div>
  )
}

export default EditTaskForm;