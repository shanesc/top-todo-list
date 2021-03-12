export default {
  init() {
    const add = () => {
      const textInput = document.querySelector('#title');
      const title = textInput.value;
      const priorityInput = document.querySelector(
        'input[name="priority"]:checked'
      );
      const priority = priorityInput
        ? parseInt(priorityInput.value)
        : 4;
      if (title) {
        this.eventAggregator.publish('todoAdded', {
          title,
          priority,
        });

        // clear inputs
        textInput.value = '';
        const radioBtns = document.getElementsByName('priority');
        radioBtns.forEach((btn) => {
          btn.checked = false;
        });
      }
    };

    const addBtn = document.querySelector('.add-todo__btn');
    addBtn.addEventListener('click', add);
  },
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
