



const TaskCard = ({ task }) => {

    return (
        <div className="flex flex-col gap-4 w-full max-w-md  bg-white rounded-2xl shadow-md border border-gray-100"> 
        <div className="task-header flex flex-col items-center bg-blue-100 p-4 rounded-t-2xl w-full h-full border-b border-black">
            <h3 className="task-title">{task.title}</h3>
            <p>Priority: {task.priority}</p>
        
        
        </div>
        <div className="task-body">
            <p className="task-description">{task.description}</p>
            <p>Status: {task.status}</p>
        </div>
        <div className="task-footer">
            <p>Due Date: {task.dueDateTime}</p>

        </div>
        </div>
    );

}

export default TaskCard;