import DOMHandler from './DOMHandler';
import TodoList from './TodoList';
import Todo from './Todo';

const list = new TodoList();

list.addTodo(new Todo('Test'));
list.addTodo(new Todo('Test'));
list.addTodo(new Todo('Test'));
list.addTodo(new Todo('Test'));

console.log(list);
list.updateTodo({ title: 'Test' }, new Todo('Tester'));
console.log(list);
