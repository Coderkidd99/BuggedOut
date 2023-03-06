import Calendar from "../MyCalendar";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { AiFillPlusCircle } from "react-icons/ai";
import TaskView from "../TaskView";
import axios from "axios";

const INITIAL_INPUTS = {
  assignTo: "",
  taskRole: "",
  taskName: "",
  description: "",
  notes: "",
  priority: "",
  isCompleted: false,
};
const BASE_URL = "https://63fe4639370fe830d9d19824.mockapi.io/users";
const Dashboard = () => {
  const [data, setData] = useState([]);
  const [submittedTask, setSubmittedTask] = useState([]);
  const [inputs, setInputs] = useState(INITIAL_INPUTS);

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newTask = { ...inputs, userId: uuidv4() };
    setSubmittedTask([...submittedTask, newTask]);

    try {
      const response = await axios.post(BASE_URL, newTask);
      console.log(response.data);
      setData([...data, response.data]);
      setInputs(INITIAL_INPUTS);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      console.log("Deleting task with id:", id);
      const response = await axios.delete(`${BASE_URL}/${id}`);
      setSubmittedTask((prevTasks) =>
        prevTasks.filter((task) => task.id !== id)
      );
      setData((prevTasks) => prevTasks.filter((task) => task.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const handleReset = () => {
    setInputs(INITIAL_INPUTS);
  };

  const handleComplete = async (id) => {
    const taskToUpdate = data.find((task) => task.id === id);
    const updatedTask = {
      ...taskToUpdate,
      isCompleted: !taskToUpdate.isCompleted,
    };

    try {
      const response = await axios.put(`${BASE_URL}/${id}`, updatedTask);
      setData((prevTasks) =>
        prevTasks.map((task) => {
          if (task.id === id) {
            return updatedTask;
          } else {
            return task;
          }
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    async function pullData() {
      try {
        const response = await axios.get(BASE_URL);
        setData(response.data);
      } catch (error) {
        console.log("something went wrong" + error);
      }
    }
    pullData();
  }, []);

  const { assignTo, taskName, taskRole, description, notes, priority } = inputs;

  return (
    <main className="flex flex-wrap justify-evenly">
      <div className="flex flex-col w-fit py-8 px-2 my-16">
        <Calendar />
        <div className="flex flex-col px-2 ">
          <h2 className="text-amber-600  mt-5 mb-1 font-bold">
            Assign to<span className="text-red-700">*</span>
          </h2>

          <input
            id="assignTo"
            type="text"
            name="assignTo"
            className="mb-5 bg-neutral-700 w-full h-9 rounded text-white"
            required
            value={assignTo}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col p-2">
          <h2 className="text-amber-600 mb-1 font-bold">
            Task Role<span className="text-red-700">*</span>
          </h2>
          <input
            id="taskRole"
            type="text"
            name="taskRole"
            className="bg-neutral-700 w-full h-9 rounded p-1 text-white"
            required
            value={taskRole}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col p-2">
          <h1 className="text-neutral-700 text-5xl font-bold w-fit font-sans mt-5 mb-4">
            STATUS
          </h1>

          <h2 className="text-amber-600 font-bold mb-2">Priority</h2>
          <select
            name="priority"
            id="priority"
            value={priority}
            onChange={handleChange}
            className="bg-neutral-600 text-neutral-100 border-none p-1 rounded w-fit"
          >
            <option value="medium">Medium</option>
            <option value="high" className="text-red-600 font-semibold">
              High
            </option>
          </select>
        </div>
      </div>

      <div className="flex flex-wrap ">
        <div className="flex flex-col mt-24 px-2  text-lg ">
          <h2 className="text-amber-600 font-bold text-md mb-1">
            Task Name<span className="text-red-700 ">*</span>
          </h2>
          <input
            id="taskName"
            type="text"
            name="taskName"
            className="w-full h-9 outline-none text-white bg-neutral-700 rounded-md p-2 mb-4 mt-1"
            required
            value={taskName}
            onChange={handleChange}
          />
          <div className="px-1">
            <h2 className="text-amber-600 font-bold text-md mb-1">
              Description<span className="text-red-700 ">*</span>
            </h2>
            <textarea
              id="description"
              name="description"
              aria-label="description"
              className="bg-neutral-700 w-full rounded text-white mt-1"
              required
              cols={9}
              rows={10}
              value={description}
              onChange={handleChange}
            />
            <div className="px-1">
              <h2 className="text-amber-600 font-bold text-md mb-1">
                Notes (optional)
              </h2>
              <textarea
                id="notes"
                name="notes"
                aria-label="notes"
                className="bg-neutral-700  rounded text-white mt-1"
                rows={9}
                cols={40}
                value={notes}
                onChange={handleChange}
              />
            </div>

            <div className="flex justify-center mx-0 p-7">
              <button
                className="rounded hover:bg-amber-500 border-none text-black font-black text-xl h-15 w-25 p-2 bg-amber-600 mr-1 flex "
                aria-label="Add Tasks"
                type="submit"
                onClick={handleSubmit}
              >
                <AiFillPlusCircle className="mr-2 flex text-3xl" /> ADD TASK
              </button>
              <button
                className="rounded active:bg-white border-none text-amber-600 bg-neutral-800 font-bold text-xl h-15 w-25 p-2"
                type="reset"
                onClick={handleReset}
              >
                RESET
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col flex-wrap p-1 mt-24 mb-10">
        <div className="flex w-full text-white text-xl p-4 border-b bg-neutral-700 mx-2 rounded-md ">
          <h2 className="flex-1 font-semibold  bg-neutral-700 rounded-md text-left">
            My Tasks - {data.length}
          </h2>
          <h3 className="flex-1 text-xl text-white font-semibold self-end text-right">Completed - {0}</h3>
        </div>
   
        <TaskView
          data={data}
          subdata={submittedTask}
          handleDelete={handleDelete}
          handleComplete={handleComplete}
        />
      </div>
    </main>
  );
};

export default Dashboard;
