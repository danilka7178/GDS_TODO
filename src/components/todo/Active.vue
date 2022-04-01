<template>
  <div class="active">
    <TodoItem v-for="el in todoActive" :key="el.id" :item="el" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import TodoItem from "../elements/TodoItem";

export default {
  name: "Active",
  components: { TodoItem },
  computed: {
    ...mapGetters({
      todoActive: "todo/todoActive",
    }),
  },
};
</script>

<style lang='scss'>
</style>