<template>
  <div class="mt-4" v-for="todo in $todos">
    <input v-id="todo.id" type="checkbox" @change="" />
    <input v-id="todo.id" :for="todo.id" class="ml-2 border-2" />
  </div>
</template>

<script setup lang="ts">
import { useStore } from "@nanostores/vue";
import { todos, addTodo } from "../stores/todoListStore"; //WritableAtom<boolean>

const $todos = useStore(todos); //Readonly<Ref<boolean>>

addTodo({ id: 0, task: "help", done: true });
console.log($todos.value);
console.log("test");
</script>

<style lang="scss" scoped></style>
