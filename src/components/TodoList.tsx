import { defineComponent } from "vue";
import { useStore, useVModel } from "@nanostores/vue";
import { todos, counter, task, addTodo } from "../stores/todoListStore"; //WritableAtom<boolean>

export default defineComponent({
  name: "TodoList",

  setup() {
    const $todos = useStore(todos); //Readonly<Ref<boolean>>

    const $task = useVModel(task, "task"); //Readonly<Ref<boolean>>

    addTodo("test");

    return () => (
      <div>
        <div>
          <input
            type='text'
            for='addTodo'
            v-model={$task}
            class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/3 p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500'
          />

          <p> {$task} </p>
          <button
            onClick={() => addTodo($task.value)}
            class='w-16 ml-2 bg-blue-400 text-white border-1 rounded-lg'
          >
            Ajouter
          </button>
        </div>

        {Object.values($todos).length && (
          <div>
            {Object.values($todos.value).map((todo) => (
              <div>
                <input
                  type='checkbox'
                  class='w-4 h-4 text-blue-600 bg-gray-100'
                />
                <label class='ml-2'> {todo.task}</label>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  },
});
