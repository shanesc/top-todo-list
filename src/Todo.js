class Todo {
  constructor(title, description, dueDate = null, priority = 1) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

export default Todo;
