<template>
  <div class="header" @click="handleHeader">
    <div class="header__icon" :class="{ active: isOpenTodoList }">
      <img src="../assets/icons/header-arrow.png" alt="icon-arrow" />
    </div>
    <div class="header__title">What needs to be done?</div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      isOpenTodoList: false,
    };
  },
  methods: {
    handleHeader() {
      this.isOpenTodoList = !this.isOpenTodoList;
      this.$store.dispatch("todo/changeVisibleTodoList", this.isOpenTodoList);
    },
  },
};
</script>

<style lang='scss'>
.header {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-weight: 700;

  border-bottom: 2px black solid;

  &__icon {
    margin: 0 10px 0 0;
    transition: all 0.2s ease;

    img {
      width: 12px;
      height: 12px;
    }

    &.active {
      transform: rotateX(180deg);
    }
  }

  &__title {
    font-style: italic;
  }
}
</style>