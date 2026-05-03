import { ArrowDownWideNarrow } from 'lucide-react';


const TaskControls = ({showIncompleteOnly, setShowIncompleteOnly , sortedTasks}) => {
  return (
    <div className='flex justify-between w-8/12 m-auto bg-sky-700 mb-2 mt-2 font-semibold'>
      <label>Task Controls</label>
      <span className='flex justify-between gap-2 items-center'>
      <input 
        type="checkbox" 
        className="w-6 h-6 rounded-2xl m-1 cursor-pointer" 
        checked={showIncompleteOnly}
        onChange={() => setShowIncompleteOnly(!showIncompleteOnly)}
      /> 
      <span>Show incomplete only</span>
      <ArrowDownWideNarrow className='cursor-pointer' onClick={sortedTasks}/>
      </span>
    </div>
  )
}

export default TaskControls