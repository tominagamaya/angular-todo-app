import { ID } from '@datorama/akita';

export interface Todo {
  id: ID;
  title: string;
  done: boolean;
  deadline?: Date;
}

export function createTodo(params: Partial<Todo>) {
  return {

  } as Todo;
}
