import { atom, map } from "nanostores";
import { number } from "zod";

export type TodoObject = {
  task: string;
  done: boolean;
};

export type TodoItem = TodoObject & { id: number };

export const counter = atom(0);

export const task = atom("");

export const todos = map<Record<number, TodoItem>>({});

export function addTodo(todo: TodoObject) {
  const counterVal = counter.get();

  console.log(todo);
  task.set(todo.task);

  counter.set(counterVal + 1);
  todos.setKey(counterVal, {
    id: counterVal,
    task: todo.task,
    done: todo.done,
  });

  console.log(todos.get());
  console.log(task.get());
}

export function changeTodoDone(id: number) {
  const todoToUpdate: TodoItem = todos.get()[id];

  todos.setKey(id, {
    id: id,
    task: todoToUpdate.task,
    done: !todoToUpdate.done,
  });
}
