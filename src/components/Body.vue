<template>
  <div class="body">
    <TodoItem v-for="el in todoList" :key="el.id" :item="el" />
  </div>
</template>

<script>
import TodoItem from "./elements/TodoItem";

export default {
  name: "Body",
  components: { TodoItem },
  data() {
    return {
      todoList: [
        { id: 0, text: "todo item example", completed: true },
        { id: 1, text: "example todo item", completed: false },
      ],
    };
  },
};
</script>

<style lang='scss'>
</style>