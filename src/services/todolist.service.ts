import { TodoListInterface } from '../interfaces/todolist.interface';
import { TodoItemInterface } from '../interfaces/todoitem.interface';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export const getTodoLists = async (): Promise<TodoListInterface[]> => {
  const response = await fetch(`${API_URL}/api/todolists`);
  
  if (!response.ok) {
    throw new Error('Error al obtener los datos de la API');
  }
  
  return response.json();
};

export const getTodoItems = async (listId: string): Promise<TodoItemInterface[]> => {
  const response = await fetch(`${API_URL}/api/todolists/${listId}/todo_items`);

  if (!response.ok) {
    throw new Error('Error al obtener items');
  }

  return response.json();
};