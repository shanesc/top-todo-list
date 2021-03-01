export default {
  addTodo(todo) {
    const list = document.querySelector('.todo-list');

    const el = document.createElement('li');
    el.classList.add('todo');
    el.textContent = todo.title;

    list.appendChild(el);
  },
};
