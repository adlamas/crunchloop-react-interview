import { TodoListInterface } from '../interfaces/todolist.interface';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export const getTodoLists = async (): Promise<TodoListInterface[]> => {
  const response = await fetch(`${API_URL}/api/todolists`);
  
  if (!response.ok) {
    throw new Error('Error al obtener los datos de la API');
  }
  
  return response.json();
};