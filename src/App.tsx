import { useEffect, useState } from 'react';
import { TodoListInterface } from './interfaces/todolist.interface';
import { getTodoLists } from './services/todolist.service';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState<TodoListInterface[]>([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const data = await getTodoLists();
        setTodos(data);
      } catch (error) {
        console.error("Error cargando listas:", error);
      }
    };

    fetchTodos();
  }, []);

  return (
    <div>
      <h1>Mis Todo Lists</h1>
      
      { 
        todos.map((item) => (
          <TodoList key={item.id} name={item.name} id={item.id} />
        ))
      }
    </div>
  )
}

export default App