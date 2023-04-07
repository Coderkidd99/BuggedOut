import { AiFillCheckCircle, AiFillDelete } from "react-icons/ai";
import { FaCircle } from "react-icons/fa";
import { FcHighPriority, FcMediumPriority } from "react-icons/fc";
import { format, isValid } from 'date-fns';
import { v4 as uuidv4 } from 'uuid';

const TaskView = ({ handleDelete, handleComplete, data}) => {
  return (
    <div className="flex flex-col items-center m-1 mt-2 gap-2 mx-2">
      {data.map((task) => (
        <div
          key={uuidv4()}
          className={`bg-neutral-700 p-1 rounded-md w-full ${
            task.iscompleted ? " opacity-60" : ""
          }`}
        >
          <div
            className={`flex justify-end m-1 ${
              task.iscompleted
                ? "text-green-400 text-sm"
                : "text-red-500 text-sm"
            }`}
          >
            <FaCircle />
          </div>
          <div className="flex text-left text-sm text-neutral-300 ml-1 font-light">
          {isValid(new Date(task.duedate)) ? format(new Date(task.duedate), 'MM-dd-yyyy') : 'Invalid date'}  
                
            </div>
          <div className="flex justify-center rounded-md w-full p-1 text-2xl font-serif text-white">
            {task.taskname}
          </div>
          <div className="flex w-full justify-evenly">
            <div className="p-1 text-white text-lg">{task.assignto}</div>
            <div className="flex justify-center text-white p-1">|</div>
            <div className=" p-1 text-white text-lg">{task.taskrole}</div>
            <div className="">
              {task.priority === "high" ? (
                <div className="flex">
                  <FcHighPriority size={25} />
                  <h3 className="flex ml-1 text-lg text-red-600 font-semibold">
                    High
                  </h3>
                </div>
              ) : (
                <div className="flex">
                  <FcMediumPriority size={25} />
                  <h3 className="flex ml-1 text-lg text-orange-400 font-semibold">
                    Medium
                  </h3>
                </div>
              )}
            </div>
          </div>
          <div className="text-xl font-serif text-zinc-300 p-1 flex-wrap w-full ">
            {task.description}
          </div>
          <div className="flex-wrap font-serif text-lg text-zinc-200">
            <div className="text-xl text-orange-100 mb-2">
              <h3 className="text-orange-300">Notes:</h3>
              {task.notes}
            </div>
          </div>
          <div className="flex justify-between p-1">
            <AiFillDelete
              className="text-neutral-200 text-2xl cursor-pointer hover:text-red-700"
              onClick={() => handleDelete(task.id)}
            />
            <div>
              {task.iscompleted ? (
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
