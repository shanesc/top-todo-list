// function Todo(_title) {
//   return {
//     get title() {
//       return _title;
//     },
//   };
// }
import { v4 as uuidv4 } from 'uuid';

class Todo {
  constructor({ title, priority = 4 }) {
    this.id = uuidv4();
    this.title = title;
    this.priority = priority;
  }
}

export default Todo;
