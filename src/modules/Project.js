import { toDate, isToday, isThisWeek, subDays } from "date-fns";

export default class Project {
  constructor(name) {
    this._name = name;
    this._todos = [];
  }

  addTodo(todo) {
    this._todos.push(todo);
  }

  // Getter and setter for name
  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  // Getter and setter for tasks
  get todos() {
    return this._tasks;
  }

  set todos(value) {
    this._tasks = value;
  }
}
