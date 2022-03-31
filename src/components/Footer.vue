<template>
  <div class="footer">
    <div class="footer__tabs">
      <Tabs />
    </div>

    <div class="footer__other other">
      <div class="other__counter">{{ counter }} items left</div>
      <div class="other__btn">clear completed</div>
    </div>
  </div>
</template>

<script>
import Tabs from "./elements/Tabs";

export default {
  name: "Footer",
  components: { Tabs },
  data() {
    return {
      counter: 1,
    };
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
}
</style>