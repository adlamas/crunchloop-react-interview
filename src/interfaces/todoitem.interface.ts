export interface TodoItemInterface {
  id: string;
  content: string;
  completed: boolean;
  todoListId: string;
  onComplete?: (listId: string, itemId: string) => void;
}
