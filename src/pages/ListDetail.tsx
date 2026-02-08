import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getTodoItems } from '../services/todolist.service';
import { TodoItemInterface } from '../interfaces/todoitem.interface';
import '../styles/ListDetail.css';

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

  return (
    <div className="page-container">
      <Link to="/">← Volver</Link>
      <h1>List ID: {id}</h1>

      {items.map((item) => {
        return (
          <div key={item.id} className="item-card">
            <h3>Content de Item: {item.content}</h3>
            <h4>ID de Item: {item.id}</h4>

            <h4>
              Completado: 
              <span className={item.completed ? 'status-yes' : 'status-no'}>
                {item.completed ? 'SI' : 'NO'}
              </span>
            </h4>
          </div>
        );
      })}
    </div>
  );
};

export default ListDetail;
