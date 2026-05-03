import {useState} from 'react'
import { CirclePlus } from 'lucide-react';


 const TaskForm = ({ addTask }) => {
    const [task, setTask] = useState('')
    const [priority, setPriority] = useState(1)

    const HandleTask = ()=>
    {
        if(task.trim())
        {
          addTask({
            id: Date.now(),
            text: task,
            priority: priority,
            done: false
          });
          setTask('');
          setPriority(1);
        }
    }
  return (
    <div className='flex justify-center items-center w-8/12 m-auto bg-sky-700 mb-2 font-semibold p-4'>
        <span></span>
        <input type="text" placeholder='Add a task' className='w-9/12 p-2 rounded-lg m-4 border-2 border-t-[(201, 24, 77)] border-solid'  value={task} onChange={(e) => setTask(e.target.value)} />
        <input type="number" min="1" max="100" placeholder='Priority' className='text-center p-2 rounded-lg m-4 border-2 border-t-[(201, 24, 77)] border-solid' value={priority} onChange={(e) => setPriority(e.target.value)} />
        <CirclePlus className='cursor-pointer hover:text-green-800 rounded h-6 w-6' onClick={HandleTask}/>
    </div>
  )
}

export default TaskForm
