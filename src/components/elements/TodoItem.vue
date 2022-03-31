<template>
  <div class="todo-item">
    <div class="todo-item__icon">
      <img
        v-if="item.completed"
        src="../../assets/icons/check-arrow.png"
        alt="check-arrow"
      />
    </div>
    <div class="todo-item__text" :class="{ active: item.completed }">
      {{ item.text }}
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: {
    item: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  components: {},
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>

<style lang="scss">
.todo-item {
  display: flex;
  align-items: center;
  cursor: pointer;

  border-bottom: 1px solid black;
  margin: 0 0 10px 0;
  padding: 0 0 5px 0;

  &:last-child {
    margin: 0;
  }

  &__icon {
    width: 18px;
    height: 18px;
    border: 1px solid black;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    margin: 0 10px 0 0;

    img {
      width: 12px;
      height: 12px;
    }
  }

  &__text {
    &.active {
      text-decoration: line-through;
    }
  }
}
</style>