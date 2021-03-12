import DOMHandler from './DOMHandler';
import eventAggregator from './eventAggregator';
class TodoList {
  constructor() {
    this._list = [];
  }

  addTodo(todo) {
    this._list.push(todo);
    DOMHandler.addItem(todo);
    return this;
  }

  deleteTodo(todo) {
    const id = todo.id;
    const updatedList = this._list.filter((todo) => {
      return todo.id !== id;
    });

    this._list = updatedList;
    DOMHandler.removeItem(todo);
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
