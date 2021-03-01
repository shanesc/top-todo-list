import DOMHandler from './DOMHandler';
class TodoList {
  constructor() {
    this._list = [];
  }

  addTodo(todo) {
    this._list.push(todo);
    DOMHandler.addTodo(todo);
    return this;
  }

  deleteTodo(todo) {
    const title = todo.title;
    const updatedList = this._list.filter((todo) => {
      return todo.title !== title;
    });

    this._list = updatedList;
    return this;
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
