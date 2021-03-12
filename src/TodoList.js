import Todo from './Todo';

class TodoList {
  constructor() {
    this._list = [];
  }

  addTodo(item) {
    const todo = new Todo(item);
    this._list.push(todo);
    return todo;
  }

  deleteTodo(item) {
    const id = item.id;
    const updatedList = this._list.filter((item) => {
      return item.id !== id;
    });

    this._list = updatedList;
    return item;
  }

  updateTodo(todo, updatedTodo) {
    const title = todo.title;
    const updatedList = this._list.map((todo) => {
      if (todo.title === title) {
        return updatedTodo;
      } else {
        return todo;
      }
    });

    this._list = updatedList;
    return this;
  }
}

export default TodoList;
