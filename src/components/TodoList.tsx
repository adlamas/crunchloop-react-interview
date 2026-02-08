import { Link } from 'react-router-dom';
import { TodoListInterface } from '../interfaces/todolist.interface';

const TodoList = ({name, id}: TodoListInterface) => {
  return (
    <div>
      <h3>{name}</h3>
      <small>ID: {id}</small>
      <Link to={`/lists/${id}`}>Ver detalles</Link>
    </div>
  );
}

export default TodoList;
