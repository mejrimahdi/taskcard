

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllTask } from '../redux/Actions/TaskAction';
import TaskCard from './TaskCard';

const TaskList = () => {
    const dispatch = useDispatch();
    const  taskList = useSelector(state => state.TaskReducer.tasks);
    console.log(taskList)

    useEffect(()=>{
        dispatch(getAllTask());

    },[])
  return (
    <div>TaskList
        {taskList.map((task)=> <TaskCard key={task._id} task={task} />  )}
    </div>
    
  )
}

export default TaskList