import { useCallback, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getTodoItems, completeItem } from '../services/todolist.service';
import { TodoItemInterface } from '../interfaces/todoitem.interface';
import '../styles/ListDetail.css';
import TodoItem from '../components/TodoItem';

const ListDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [items, setItems] = useState<TodoItemInterface[]>([]);

  useEffect(() => {
    if (!id) return;

    const fetchItems = async (id: string) => {
      try {
        const data = await getTodoItems(id);
        setItems(data);
      } catch (error) {
        console.error("Error loading items:", error);
      }
    };

    fetchItems(id);
  }, [id]);

  // Using useCallback to maintain the same function reference across renders
  // This is vital for React.memo to work in the child component
  //const handleComplete2 = useCallback(async (listId: string, itemId: string) => {
  //  if (!id) return;
  //
  //}, [id]);

const handleComplete = useCallback(async (listId: string, itemId: string) => {
    try {
      const completedItem = await completeItem(listId, itemId);

      setItems((prevItems) =>
        prevItems.map((item) => 
          item.id.toString() === itemId.toString() ? completedItem : item
        )
      );
    } catch (error) {
      console.error("Error updating item:", error);
      alert("No se pudo actualizar el item.");
    }
  }, []);

  return (
    <div className="page-container">
      <Link to="/">← Volver</Link>
      <h1>List ID: {id}</h1>

      {items.length > 0 ? (
        items.map((item) => (
          <TodoItem key={item.id} id={item.id} completed={item.completed} content={item.content} todoListId={id!} onComplete={handleComplete} />
        ))
      ) : (
        <p>No hay items en esta lista.</p>
      )}
    </div>
  );
};

export default ListDetail;
