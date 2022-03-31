<template>
  <div id="app">
    <div class="toDoApp">
      <div class="toDoApp__header">
        <Header />
      </div>
      <div class="toDoApp__body">
        <Body />
      </div>
      <div class="toDoApp__footer">
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: { Header, Body, Footer },
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  justify-content: center;
}

.toDoApp {
  width: 50%;

  &__header {
    margin: 0 0 10px 0;
  }

  &__body {
    margin: 0 0 10px 0;
  }
}
</style>
