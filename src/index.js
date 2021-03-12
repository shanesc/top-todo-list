import TodoList from './TodoList';
import DOMHandler from './DOMHandler';
import eventAggregator from './eventAggregator';

DOMHandler.eventAggregator = eventAggregator;
DOMHandler.init();

const list = new TodoList();

eventAggregator.subscribe('todoAdded', (todo) => {
  const el = list.addTodo(todo);
  DOMHandler.addItem(el);
});

eventAggregator.subscribe('todoRemoved', (todo) => {
  list.deleteTodo(todo);
  DOMHandler.removeItem(todo);
});

eventAggregator.publish('todoAdded', { title: 'Test', priority: 1 });
eventAggregator.publish('todoAdded', { title: 'Test', priority: 2 });
eventAggregator.publish('todoAdded', { title: 'Test' });
