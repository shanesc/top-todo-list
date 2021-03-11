import TodoList from './TodoList';
import Todo from './Todo';

const list = new TodoList();
const input = document.querySelector('#title');
const addBtn = document.querySelector('.add-todo__btn');
addBtn.addEventListener('click', () => {
  const title = input.value;
  if (title) {
    add({ title });
    input.value = '';
  }
});

function add(item) {
  const todo = new Todo(item);
  list.addTodo(todo);
}

add({ title: 'Test', priority: 1 });
add({ title: 'Test', priority: 2 });
add({ title: 'Test' });
