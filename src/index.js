import TodoList from './TodoList';
import Todo from './Todo';

const list = new TodoList();
const textInput = document.querySelector('#title');
const addBtn = document.querySelector('.add-todo__btn');
addBtn.addEventListener('click', () => {
  const title = textInput.value;
  const priorityInput = document.querySelector(
    'input[name="priority"]:checked'
  );
  const priority = priorityInput ? parseInt(priorityInput.value) : 4;
  console.log(priority);
  if (title) {
    add({ title, priority });
    textInput.value = '';
  }
});

function add(item) {
  const todo = new Todo(item);
  list.addTodo(todo);
  console.log(list);
}

add({ title: 'Test', priority: 1 });
add({ title: 'Test', priority: 2 });
add({ title: 'Test' });
