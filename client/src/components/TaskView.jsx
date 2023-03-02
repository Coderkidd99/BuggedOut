import { AiFillCheckCircle, AiFillDelete } from "react-icons/ai";

const TaskView = ({ submittedTask, handleDelete, handleComplete}) => {
  return (
    <div className="flex flex-col items-center m-1">
      {submittedTask.map((task) => (
        <div
          key={task.userId}
          className={`flex flex-col mb-1 p-1 w-80% rounded-md bg-stone-700 ${
            task.completed ? "text-green-500" : "text-red-500"
          }`}
        >
          <div className="flex justify-center rounded-md w-full p-1 text-2xl font-serif text-white">
            {task.taskName}
          </div>
          <div className="flex w-full justify-evenly">
            <div className="p-1 text-white text-lg">{task.assignTo}</div>
            <div className="flex justify-center text-white p-1">|</div>
            <div className=" p-1 text-white text-lg">{task.taskRole}</div>
          </div>
          <div className="text-xl font-serif text-zinc-300 p-1 flex-wrap">
            {task.description}
          </div>
          <div className="flex-wrap font-serif text-lg text-zinc-200">
            <div className="text-xl text-orange-100 mb-2">
              <h3 className="text-orange-300">Notes:</h3>
              {task.notes}
            </div>
          </div>
          <div className="flex justify-between">
            <AiFillDelete
              className="text-neutral-200 text-2xl cursor-pointer hover:text-red-700"
              onClick={() => handleDelete(task.id)}
            />
            <div>
              {task.isCompleted ? (
                <AiFillCheckCircle
                  className="text-neutral-200 text-2xl cursor-pointer hidden"
                  onClick={() => handleComplete(task.id)}
                />
              ) : (
                <AiFillCheckCircle
                  className="text-neutral-200 text-2xl cursor-pointer  hover:text-blue-500"
                  onClick={() => handleComplete(task.id)}
                />
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskView;
