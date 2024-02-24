import { toDate, isToday, isThisWeek, subDays } from "date-fns";

export default class Project {
  constructor(name) {
    this._name = name;
    this._tasks = [];
  }

  // Getter and setter for name
  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  // Getter and setter for tasks
  get tasks() {
    return this._tasks;
  }

  set tasks(value) {
    this._tasks = value;
  }
}
