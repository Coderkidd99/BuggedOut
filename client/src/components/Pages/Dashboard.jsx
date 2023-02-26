import Calendar from "../MyCalendar";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { AiFillPlusCircle } from "react-icons/ai";
import TaskView from "../TaskView";
import axios from "axios";

const Dashboard = () => {
  const [fetchedData, setFetchedData] = useState([]);
  const [submittedTask, setSubmittedTask] = useState([]);
  const [inputs, setInputs] = useState({
    id: uuidv4(),
    assignTo: "",
    taskRole: "",
    taskName: "",
    description: "",
    notes: "",
    priority: "",
    isCompleted: false,
  });

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  //old way of doing it without fetching API endpoints and doing CRUD operations
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedTask([...submittedTask, { ...inputs, id: uuidv4() }]);
    setInputs({
      assignTo: "",
      taskRole: "",
      taskName: "",
      description: "",
      notes: "",
      priority: "",
      isCompleted: false,
      date: "",
      id: uuidv4(),
    });
  };

  //handle function to post
  // submitted form to api DB and evantually show on TaskView
  const handleAnotherSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://burimi-issuetracker-api.azurewebsites.net/api/api/AddUsers/",
        inputs
      )
      .then((response) => {
        setFetchedData([...fetchedData, response.data]);
        setSubmittedTask([
          ...submittedTask,
          { ...inputs, id: response.data.id },
        ]);
        setInputs({
          assignTo: "",
          taskRole: "",
          taskName: "",
          description: "",
          notes: "",
          priority: "",
          isCompleted: false,
          date: "",
          id: uuidv4(),
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDelete = (id) => {
    setSubmittedTask(submittedTask.filter((task) => task.id !== id));
  };
  const handleReset = () => {
    setInputs({
      assignTo: "",
      taskRole: "",
      taskName: "",
      description: "",
      notes: "",
      priority: "",
      isCompleted: false,
    });
  };
  const handleComplete = (id) => {
    setSubmittedTask((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, isCompleted: true } : task
      )
    );
  };

  const { assignTo, taskRole, taskName, description, notes, priority } = inputs;

  useEffect(() => {
    async function pullData() {
      try {
        const response = await axios.get(
          "https://burimi-issuetracker-api.azurewebsites.net/api/Api/getusers/"
        );
        console.log(response.data);
        setFetchedData(response.data);
      } catch (error) {
        console.log("something went wrong" + error);
      }
    }
    pullData();
  }, []);

  return (
    <main className="flex flex-wrap justify-evenly">
      <div className="flex flex-col w-fit py-8 px-2 my-16">
        <Calendar />
        <div className="flex flex-col px-2 ">
          <h2 className="text-amber-600  mt-5 mb-1 font-bold">
            Assign to<span className="text-red-700">*</span>
          </h2>

          <input
            id="assign-to"
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
            id="task-role"
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
            id="priority-status"
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
            id="task-name"
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
                onClick={handleAnotherSubmit}
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

      <div className="flex flex-col flex-wrap mt-24 mb-10">
        <div className="bg-neutral-700  ">
          <h2 className="font-semibold w-full text-white text-xl p-4 border-b bg-neutral-700">
            My Tasks (2)
          </h2>
        </div>
        <TaskView
          submittedTask={submittedTask}
          handleDelete={handleDelete}
          handleComplete={handleComplete}
        />
      </div>
    </main>
  );
};

export default Dashboard;
