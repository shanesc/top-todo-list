// function Todo(_title) {
//   return {
//     get title() {
//       return _title;
//     },
//   };
// }
import { v4 as uuidv4 } from 'uuid';

class Todo {
  constructor(title) {
    this.title = title;
    this.id = uuidv4();
  }
}

export default Todo;
