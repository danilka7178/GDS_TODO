<template>
  <div class="tabs">
    <div class="all" @click="handleTab('all')">All</div>
    <div class="active" @click="handleTab('active')">Active</div>
    <div class="completed" @click="handleTab('completed')">Completed</div>
  </div>
</template>

<script>
export default {
  name: "Tabs",
  methods: {
    handleTab(name) {
      if (this.$router.history.current.name === name) {
        return;
      }

      this.$router.push({ name });
    },
  },
};
</script>

<style lang="scss">
.tabs {
  display: flex;
  align-items: center;
  justify-content: space-around;

  div {
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>