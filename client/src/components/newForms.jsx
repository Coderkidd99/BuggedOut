import React, { useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import TaskView from "./TaskView";
import { v4 as uuidv4 } from 'uuid';

const Forms = () => {
  const [submittedTask, setSubmittedTask] = useState([]);
  const [inputs, setInputs] = useState({
    id: uuidv4(),
    assignTo: "",
    taskRole: "",
    taskName: "",
    description: "",
    notes: "",
    priority: "",
    completed: false
  });

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedTask([...submittedTask, { ...inputs, id: uuidv4()}]);
    setInputs({
      assignTo: "",
      taskRole: "",
      taskName: "",
      description: "",
      notes: "",
      priority: "",
      completed: false,
      date: "",
      id: uuidv4()
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
    completed: false
  })
  };
  const completedHandle = () => {}

  const { assignTo, taskRole, taskName, description, notes, priority } = inputs;
  return (
    <div className="flex">
      <form onSubmit={handleSubmit}>
        <h2 className="text-amber-600 mt-5 mb-1 font-bold">
          Assign to<span className="text-red-700">*</span>
        </h2>
        <label htmlFor="assign-to">
          <input
            id="assign-to"
            type="text"
            name="assignTo"
            className="mb-5 bg-neutral-700 w-60 h-9 rounded text-white p-1"
            required
            value={assignTo}
            onChange={handleChange}
          />
        </label>
        <h2 className="text-amber-600 mb-1 font-bold">
          Task Role<span className="text-red-700">*</span>
        </h2>
        <label htmlFor="task-role">
          <input
            id="task-role"
            type="text"
            name="taskRole"
            className="bg-neutral-700 w-60 h-9 rounded p-1 text-white"
            required
            value={taskRole}
            onChange={handleChange}
          />
        </label>
        <h1 className="text-neutral-700 text-5xl font-bold font-sans mt-5 mb-4">
          STATUS
        </h1>
        <label htmlFor="priority-status">
          <h2 className="text-amber-600 font-bold mb-2">Priority</h2>
          <select
            name="priority"
            id="priority-status"
            value={priority}
            onChange={handleChange}
            className="bg-neutral-600 text-neutral-100 border-none p-1 rounded"
          >
            <option value="medium">Medium</option>
            <option value="high" className="text-red-600 font-semibold">
              High
            </option>
          </select>
        </label>
        <div className="flex relative">
          <div className="columntwo">
            <h2 className="text-amber-600 font-bold text-md mb-1">
              Task Name<span className="text-red-700 ">*</span>
            </h2>
            <label htmlFor="task-name">
              <input
                id="task-name"
                type="text"
                name="taskName"
                className="w-96 h-9 outline-none text-white bg-neutral-700 rounded-md p-2 "
                required
                value={taskName}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="columntworowtwo">
            <h2 className="text-amber-600 font-bold text-md mb-1">
              Description<span className="text-red-700 ">*</span>
            </h2>
            <label htmlFor="description">
              <textarea
                id="description"
                name="description"
                aria-label="description"
                className="bg-neutral-700 w-96 h-24 rounded text-white"
                required
                value={description}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="columntworowthree">
            <h2 className="text-amber-600 font-bold text-md mb-1">
              Notes (optional)
            </h2>
            <label htmlFor="notes">
              <textarea
                id="notes"
                name="notes"
                aria-label="notes"
                className="bg-neutral-700 w-96 h-28 rounded text-white"
                value={notes}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="submitbutton">
            <button
              className="rounded hover:bg-amber-500 border-none text-black font-black text-xl h-15 w-25 p-2 bg-amber-600 mr-1 flex "
              aria-label="Add Tasks"
              type="submit"
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
      </form>
      <div className="flex relative">
        <div className="bg-neutral-700 text-lg text-white rounded-md p-2 fixed bottom-25 left-21 ml-36 mt-10 w-96 h-45">
          <h2 className="font-semibold text-xl p-2 border-b border-neutral-600">
            My Tasks
          </h2>
          <div>
            <TaskView
              submittedTask={submittedTask}
              handleDelete={handleDelete}
              completedHandle={completedHandle}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Forms;
