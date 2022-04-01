<template>
  <div class="footer">
    <div class="footer__tabs">
      <Tabs />
    </div>

    <div class="footer__other other">
      <div class="other__counter">{{ todoActive.length }} items left</div>
      <div
        v-if="todoCompleted.length"
        class="other__btn"
        @click="removeCompletedItems"
      >
        clear completed
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Tabs from "./elements/Tabs";

export default {
  name: "Footer",
  components: { Tabs },
  computed: {
    ...mapGetters({
      todoActive: "todo/todoActive",
      todoCompleted: "todo/todoCompleted",
    }),
  },
  methods: {
    removeCompletedItems() {
      this.$store
        .dispatch("todo/removeCompletedItems")
        .then(this.$store.dispatch("todo/setListToLocalStorage"));
    },
  },
};
</script>

<style lang='scss'>
.footer {
  font-size: 12px;

  &__tabs {
    margin: 0 0 10px 0;
  }

  &__other {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .other {
    &__btn {
      border: 1px black solid;
      padding: 3px 5px;
      cursor: pointer;
    }
  }
}
</style>