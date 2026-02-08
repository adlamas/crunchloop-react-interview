import { TodoItemInterface } from '../interfaces/todoitem.interface';

const TodoItem = ({ id, content, completed }: TodoItemInterface) => {
  return (
    <div>
      <p>ID: {id}</p>
      <p>Contenido: {content}</p>
      <p>Estado: {completed ? 'Completado' : 'Pendiente'}</p>
    </div>
  );
}

export default TodoItem;
