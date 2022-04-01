<template>
  <div class="completed">
    <TodoItem v-for="el in todoCompleted" :key="el.id" :item="el" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import TodoItem from "../elements/TodoItem";

export default {
  name: "Completed",
  components: { TodoItem },
  computed: {
    ...mapGetters({
      todoCompleted: "todo/todoCompleted",
    }),
  },
};
</script>

<style lang='scss'>
</style>