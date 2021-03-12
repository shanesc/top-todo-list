import TodoList from './TodoList';
import Todo from './Todo';
import eventAggregator from './eventAggregator';
import DOMHandler from './DOMHandler';

DOMHandler.eventAggregator = eventAggregator;

const list = new TodoList();

eventAggregator.subscribe('todoAdded', (todo) => {
  list.addTodo(todo);
  DOMHandler.addItem(todo);
});

eventAggregator.subscribe('todoRemoved', (todo) => {
  list.deleteTodo(todo);
  DOMHandler.removeItem(todo);
});

const textInput = document.querySelector('#title');
const addBtn = document.querySelector('.add-todo__btn');
addBtn.addEventListener('click', () => {
  const title = textInput.value;
  const priorityInput = document.querySelector(
    'input[name="priority"]:checked'
  );
  const priority = priorityInput ? parseInt(priorityInput.value) : 4;
  if (title) {
    add({ title, priority });
    textInput.value = '';
  }
});

function add(item) {
  const todo = new Todo(item);
  eventAggregator.publish('todoAdded', todo);
}

add({ title: 'Test', priority: 1 });
add({ title: 'Test', priority: 2 });
add({ title: 'Test' });
