import React, { useState, useEffect } from "react";
import {
  addTaskToLocalStorage,
  getTasksFromLocalStorage,
} from "./ToDoListHelper";
import ToDoListEdit from "./ToDoListEdit";

function ToDoList() {
  const [tasks, setTasks] = useState(getTasksFromLocalStorage);
  const [newTask, setNewTask] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedTaskName, setEditedTaskName] = useState("");

  useEffect(() => {
    addTaskToLocalStorage(tasks);
  }, [tasks]);

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask(event) {
    event.preventDefault();
    // If the input field is not empty then add the task
    if (newTask.trim() !== "") {
      setTasks((tasks) => [...tasks, { name: newTask, completed: false }]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    // Check to see if the index of the currently element is equal to the index passed in as an argument
    const updatedTasks = tasks.filter((element, i) => i !== index);
    setTasks(updatedTasks);
  }

  function moveTaskUp(index) {
    // If index is not greater than 0 (meaning index = 0) then the task is already at the top
    if (index > 0) {
      const updatedTasks = [...tasks];

      [updatedTasks[index - 1], updatedTasks[index]] = [
        updatedTasks[index],
        updatedTasks[index - 1],
      ];
      setTasks(updatedTasks);
    }
    return;
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
    return;
  }

  function toggleTaskCompletion(index) {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  }

  // When the user clicks on the edit button the
  function handleEdit(index) {
    setEditingIndex(index);
    setEditedTaskName(tasks[index].name);
  }

  function handleSaveEdit(index) {
    if (editedTaskName !== "") {
      const updatedTasks = [...tasks];
      updatedTasks[index].name = editedTaskName;
      setTasks(updatedTasks);
      setEditingIndex(null);
    }
    return;
  }

  function handleCancelEdit() {
    setEditingIndex(null);
  }

  return (
    <div className="to-do-list">
      <h1>To-Do-List</h1>
      <form>
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={(event) => handleInputChange(event)}
        />
        <button className="add-button" onClick={(event) => addTask(event)}>
          Add
        </button>
      </form>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            {editingIndex === index ? (
              // Render input field for editing task name
              <ToDoListEdit
                editedTaskName={editedTaskName}
                setEditedTaskName={setEditedTaskName}
                handleSaveEdit={() => handleSaveEdit(index)}
                handleCancelEdit={handleCancelEdit}
                index={index}
              />
            ) : (
              <>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTaskCompletion(index)}
                />
                <span className={`text ${task.completed ? "completed" : ""}`}>
                  {task.name}
                </span>
                <button
                  className="delete-button"
                  onClick={() => deleteTask(index)}
                >
                  Delete
                </button>
                <button
                  className="move-button"
                  onClick={() => moveTaskUp(index)}
                >
                  👆
                </button>
                <button
                  className="move-button"
                  onClick={() => moveTaskDown(index)}
                >
                  👇
                </button>
                <button
                  className="edit-button"
                  onClick={() => handleEdit(index)}
                >
                  🖊️
                </button>
              </>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ToDoList;
