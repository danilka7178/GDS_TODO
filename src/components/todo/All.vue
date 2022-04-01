<template>
  <div class="all">
    <TodoItem v-for="el in todoAll" :key="el.id" :item="el" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import TodoItem from "../elements/TodoItem";

export default {
  name: "All",
  components: { TodoItem },
  computed: {
    ...mapGetters({
      todoAll: "todo/todoAll",
    }),
  },
};
</script>

<style lang='scss'>
</style>