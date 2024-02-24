export default class Task {
  constructor(name, dueDate = "No date") {
    this._name = name;
    this._dueDate = dueDate;
  }

  // Getter and setter for name
  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  // Getter and setter for dueDate
  get dueDate() {
    return this._dueDate;
  }

  set dueDate(date) {
    this._dueDate = date;
  }

  getDateFormatted() {
    const day = this.dueDate.split("/")[0];
    const month = this.dueDate.split("/")[1];
    const year = this.dueDate.split("/")[2];
    return `${month}/${day}/${year}`;
  }
}
