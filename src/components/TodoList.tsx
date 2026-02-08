import { TodoListInterface } from '../interfaces/todolist.interface';

const TodoList = ({name, id}: TodoListInterface) => {
  return (
    <div>
      <small>ID: {id}</small>
      <h3>{name}</h3>
    </div>
  );
}

export default TodoList;
