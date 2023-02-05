<template>
  <div class="flex">
    <input
      type="text"
      for="addTodo"
      :v-model="taskToAdd"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/3 p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500"
    />
    <button
      @click="addTodo({ task: taskToAdd.value.toString(), done: false })"
      class="w-16 ml-2 bg-blue-400 text-white border-1 rounded-lg"
    >
      Ajouter
    </button>
  </div>

  <div class="bg-gray-50 mt-2">
    <p>Test:</p>
    <p>{{ taskToAdd }}</p>
  </div>

  <div class="mt-4" v-for="todo in listTodos">
    <input
      :id="todo.id.toString()"
      type="checkbox"
      @change="changeTodoDone(todo.id)"
      v-model="todo.done"
      class="w-4 h-4 text-blue-600 bg-gray-100"
    />
    <label :for="todo.id.toString()" class="ml-2">
      {{ todo.task }} - {{ todo.done }}</label
    >
  </div>
</template>

<script setup lang="ts">
import { useStore, useVModel } from "@nanostores/vue";
import {
  todos,
  changeTodoDone,
  addTodo,
  counter,
  task,
} from "../stores/todoListStore"; //WritableAtom<boolean>

const listTodos = useStore(todos); //Readonly<Ref<boolean>>

const taskToAdd = useVModel(task, "task");
</script>

<style lang="scss" scoped></style>
