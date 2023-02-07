import { defineComponent } from "vue";
import { useStore, useVModel } from "@nanostores/vue";
import {
  todos,
  changeTodoDone,
  addTodo,
  counter,
  task,
} from "../stores/todoListStore"; //WritableAtom<boolean>

export default defineComponent({
  name: "TodoList",

  setup() {
    const $todos = useStore(todos); //Readonly<Ref<boolean>>

    const $task = useStore(task); //Readonly<Ref<boolean>>

    Object.values($todos).map(({ id, task, done }) => console.log(task));

    return () => (
      <div>
        <div>
          <input
            type='text'
            for='addTodo'
            class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/3 p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500'
          />
          <button class='w-16 ml-2 bg-blue-400 text-white border-1 rounded-lg'>
            Ajouter
          </button>
        </div>

        {Object.values($todos).map((todo) => (
          <div>
            <p> {todo} </p>
            <input type='checkbox' class='w-4 h-4 text-blue-600 bg-gray-100' />
            <label class='ml-2'>test</label>
          </div>
        ))}
      </div>
    );
  },
});
