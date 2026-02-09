
import React from 'react';
import { TodoItemInterface } from '../interfaces/todoitem.interface';
import '../styles/ListDetail.css';

// Using React.memo to prevent re-renders unless props change
const TodoItem = React.memo(({ id, content, completed, onComplete, todoListId }: TodoItemInterface) => {
  console.log(`Rendering Item: ${id}`); // Check only renders the record with the props changed

  return (
    <div className="item-card">
      <h3>Content de Item: {content}</h3>
      <h4>ID de Item: {id}</h4>
      <h4>
        Completado: 
        <span className={completed ? 'status-yes' : 'status-no'}>
          {completed ? 'SI' : 'NO'}
        </span>
      </h4>
      
      {!completed && onComplete && (
        <button onClick={() => onComplete(todoListId, id)}>
          Completar
        </button>
      )}
    </div>
  );
});

export default TodoItem;
