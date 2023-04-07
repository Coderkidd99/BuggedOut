import React from "react";

const Insights = () => {
  return (
<div className="flex sm:flex-col sm:items-center justify-center h-screen text-white">
  <div className="w-full max-w-4xl px-10 sm:flex-wrap pt-5 m-16">
    <h1 className="text-3xl font-bold text-amber-500 outline-amber mb-6">
          BuggedOut App - Task Management Application Overview:
        </h1>
        <p className="mb-4">
          BuggedOut is a task management application developed using ReactJS
          that helps users to keep track of their tasks, due dates, and other
          essential information related to their tasks. This app is developed to
          provide a better task management solution for individuals or teams who
          want to stay organized and productive.
        </p>
        <p className="mb-4">Functionality:</p>
        <ul className="list-disc list-inside mb-4">
          <li>
            <strong>View tasks: </strong> The user can view all the tasks created by them. The
            tasks are listed on the dashboard of the app, showing details like
            task name, due date, assigned to, task role, priority, and
            completion status.
          </li>
          <li>
          <strong>Create tasks: </strong>Create tasks: The user can create new tasks by filling out the form
            provided on the dashboard. The form contains fields for task name,
            description, due date, assigned to, task role, notes, and priority.
            The new tasks are added to the list of tasks shown on the dashboard.
          </li>
          <li>
            <strong>Edit tasks: </strong> The user can edit the tasks created by them. The user
            can change the fields of a task, including the name, description,
            due date, assigned to, task role, notes, and priority.
          </li>
          <li>
            <strong>Delete tasks: </strong> The user can delete the tasks created by them. The
            user can delete the tasks one at a time.
          </li>
          <li>
            <strong>Mark tasks as complete: </strong> The user can mark the tasks as complete or
            incomplete. The user can toggle the completion status of a task with
            the help of the checkbox provided.
          </li>
          <li>
            <strong>Sort tasks: </strong> The user can sort the tasks by their priority, due date,
            or completion status. The user can choose to sort the tasks in
            ascending or descending order.
          </li>
          <li>
            <strong>Filter tasks: </strong> The user can filter the tasks based on their
            completion status. The user can choose to view all tasks, completed
            tasks, or incomplete tasks.
          </li>
          <li>
            <strong>Calendar view: </strong> The user can view their tasks in a calendar view. The
            calendar shows the due dates of the tasks, and the user can navigate
            to different months and years to view their tasks.
          </li>
        </ul>
        <p className="mb-4"><strong>Backend and Database: </strong></p>
        <p className="mb-10">
          BuggedOut uses a PostgreSQL database to store the tasks and related
          information. The app connects to the database using the Node.js and
          Express.js framework, which are used to create a REST API. The API
          provides CRUD operations for managing the tasks and serves as the
          backend for the React frontend. The REST API is hosted on
          https://buggedout-api.onrender.com/api, and the data for the app is
          fetched from this API using Axios.
        </p>
      </div>
    </div>
  );
};
export default Insights;