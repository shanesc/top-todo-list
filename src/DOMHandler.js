export default {
  addItem(item) {
    const todoList = document.querySelector('.todo-list');
    const el = document.createElement('li');
    el.id = item.id;
    el.classList.add('todo');
    el.classList.add(`priority-${item.priority}`);

    const title = document.createElement('span');
    title.classList.add('todo__title');
    title.textContent = item.title;

    const removeEl = document.createElement('button');
    removeEl.classList.add('btn-remove');
    removeEl.textContent = 'X';
    removeEl.addEventListener('click', () => {
      this.eventAggregator.publish('todoRemoved', item);
    });

    el.appendChild(removeEl);
    el.appendChild(title);
    todoList.appendChild(el);
  },
  removeItem(item) {
    const id = item.id;
    const el = document.getElementById(`${id}`);
    el.remove();
  },
  // renderList(list) {
  //   this.clearList();
  //   const todoList = document.querySelector('.todo-list');
  //   list.forEach((todo) => {
  //     const el = document.createElement('li');
  //     el.classList.add('todo');
  //     el.id = todo.id;
  //     el.textContent = todo.title;
  //     todoList.appendChild(el);
  //   });
  // },
  // clearList() {
  //   const todoList = document.querySelector('.todo-list');
  //   while (todoList.hasChildNodes()) {
  //     todoList.removeChild(todoList.lastChild);
  //   }
  // },
};
