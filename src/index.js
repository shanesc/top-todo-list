import DOMHandler from './DOMHandler';
import TodoList from './TodoList';
import Todo from './Todo';
import eventAggregator from './eventAggregator';

const list = new TodoList();
const input = document.querySelector('#title');
const addBtn = document.querySelector('.add-todo__btn');
addBtn.addEventListener('click', () => {
  const title = input.value;
  if (title) {
    const todo = new Todo({ title });
    list.addTodo(todo);
    input.value = '';
  }
});

eventAggregator.subscribe('todoAdded', () => {
  console.log('add');
  DOMHandler.addItem(item);
});

list.addTodo(new Todo({ title: 'Test', priority: 1 }));
list.addTodo(new Todo({ title: 'Test', priority: 2 }));
list.addTodo(new Todo({ title: 'Test' }));

console.log(list);
// list.updateTodo({ title: 'Test' }, new Todo('Tester'));
