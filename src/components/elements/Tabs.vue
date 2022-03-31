<template>
  <div class="tabs">
    <div class="all">All</div>
    <div class="active">Active</div>
    <div class="completed">Completed</div>
  </div>
</template>

<script>
export default {
  name: "Tabs",
  props: {},
  components: {},
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>

<style lang="scss">
.tabs {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
</style>