import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getTodoItems } from '../services/todolist.service';
import { TodoItemInterface } from '../interfaces/todoitem.interface';

const ListDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [items, setItems] = useState<TodoItemInterface[]>([])

  useEffect(() => {
    if (!id) return; // Guard clause: if id is undefined, stop here

    const fetchItems = async(id: string) => {
      try {
        const items = await getTodoItems(id);
        setItems(items)
      } catch (error) {
        console.error("Error loading lists:", error);
      }
    }

    fetchItems(id)
  }, [])

  return(
    <div>
      {
        items.map((item) => {
          return(
            <div style={{marginTop: '2em'}} key={item.id}>
              <h3>Content de Item: {item.content}</h3>
              <h4>ID de Item: {item.id}</h4>

              <h4>Completado: {item.completed ? 'SI' : 'NO'}</h4>
            </div>
          )
      })

      }
    </div>
  )
}

export default ListDetail;
