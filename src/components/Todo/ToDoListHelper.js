function addTaskToLocalStorage(tasks) {
  localStorage.setItem("Tasks", JSON.stringify(tasks));
}

function getTasksFromLocalStorage() {
  const tasks = localStorage.getItem("Tasks");
  return tasks ? JSON.parse(tasks) : [];
}

export { addTaskToLocalStorage, getTasksFromLocalStorage };
