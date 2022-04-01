<template>
  <div class="tabs">
    <div
      class="all"
      :class="{ current: currentTab === 'all' }"
      @click="handleTab('all')"
    >
      All
    </div>
    <div
      class="active"
      :class="{ current: currentTab === 'active' }"
      @click="handleTab('active')"
    >
      Active
    </div>
    <div
      class="completed"
      :class="{ current: currentTab === 'completed' }"
      @click="handleTab('completed')"
    >
      Completed
    </div>
  </div>
</template>

<script>
export default {
  name: "Tabs",
  data() {
    return {
      currentTab: "all",
    };
  },
  created() {
    this.currentTab = this.$router.history.current.name;
  },
  methods: {
    handleTab(name) {
      if (this.$router.history.current.name === name) {
        return;
      }

      this.$router.push({ name });
      this.currentTab = name;
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

    &.current {
      font-weight: bold;
    }

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>