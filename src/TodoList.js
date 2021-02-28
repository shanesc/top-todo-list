import Todo from './Todo';

class TodoList {
  constructor() {
    this._list = [];
  }

  _createTodo(title, description, dueDate, priority) {
    return new Todo(title, description, dueDate, priority);
  }

  addTodo(title, description, dueDate, priority) {
    const todo = this._createTodo(
      title,
      description,
      dueDate,
      priority
    );
    this._list.push(todo);
    return this;
  }

  get list() {
    return this._list;
  }
}

export default TodoList;
