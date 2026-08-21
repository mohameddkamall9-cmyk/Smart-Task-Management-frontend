
import TaskCard from './TaskCard'

const TaskList = ({ TaskObj}) => {

    return(
        <div className="task-list">
        <div className="task-list-header border-b border-black p-2 mb-2">
            <h4 className="task-list-title text-2xl">task list</h4>
        </div>
        <div className="task-list-body  grid grid-cols-1  sm:grid-cols-2  md:grid-cols-3 gap-2 ">
            <TaskCard task={TaskObj}/>
            <TaskCard task={TaskObj}/>
            <TaskCard task={TaskObj}/>
            <TaskCard task={TaskObj}/>

                
        </div>




        </div>
    )
}

export default TaskList;