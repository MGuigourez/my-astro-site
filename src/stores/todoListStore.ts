import { atom, map, WritableAtom } from "nanostores";

export type TodoItem = {
  id: number;
  task: string;
  done: boolean;
};

export const todos = atom([] as TodoItem[]);

export const addTodo = (todo: TodoItem) => todos.set([...todos.get(), todo]);
