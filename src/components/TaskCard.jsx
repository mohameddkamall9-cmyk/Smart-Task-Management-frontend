



const TaskCard = ({ task }) => {

    return (
        <div className="flex flex-col gap-4 w-full max-w-md  bg-white rounded-2xl shadow-md border border-gray-100"> 
        <div className="task-header flex flex-col items-center bg-blue-100 p-4 rounded-t-2xl w-full h-full border-b  border-black">
            <h3 className="task-title">{task.title}</h3>
            <p>Priority: {task.priority}</p>
        
        
        </div>
        <div className="task-body flex flex-col items-center gap-2 p-4">
            <img className="task-image w-40 h-40 object-cover rounded-lg" src={task.image} alt={task.title} />
            <p className="task-description font-sans text-gray-600 text-sm">{task.description}</p>
            <p className="task-status font-medium font-sans text-blue-900 text-xs">Status: {task.status}</p>
        </div>
        <div className="task-footer border-t border-black p-4 flex flex-col items-center ">
            <p>Due Date: {task.dueDateTime}</p>

        </div>
        </div>
    );

}

export default TaskCard;