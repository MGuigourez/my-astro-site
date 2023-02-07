import { atom, map } from "nanostores";
import { number } from "zod";

export type TodoObject = {
  task: string;
  done: boolean;
};

export type TodoItem = TodoObject & { id: string };

export const counter = atom(0);

export const task = map({ task: "" });

export const todos = map<Record<string, TodoItem>>({});

export function addTodo(task: string) {
  const counterVal = counter.get();

  counter.set(counterVal + 1);

  todos.setKey(counterVal.toString(), {
    id: counterVal.toString(),
    task: task,
    done: false,
  });
}

export function changeTodoDone(id: string) {
  const todoToUpdate: TodoItem = todos.get()[id];

  todos.setKey(id, {
    id: id,
    task: todoToUpdate.task,
    done: !todoToUpdate.done,
  });
}
