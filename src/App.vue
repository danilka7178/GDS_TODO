<template>
  <div id="app">
    <div class="toDoApp">
      <div class="toDoApp__header">
        <Header />
      </div>
      <div class="toDoApp__body" v-if="isOpenTodoList">
        <Body />
        <div class="addNewItem" v-if="isStartCreateNewItem">
          <input v-model="newItem" ref="newItem" />
        </div>
      </div>
      <div class="toDoApp__footer" v-if="isOpenTodoList">
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: { Header, Body, Footer },
  data() {
    return {
      newItem: null,
    };
  },
  computed: {
    ...mapGetters({
      isOpenTodoList: "todo/isOpenTodoList",
      isStartCreateNewItem: "todo/isStartCreateNewItem",
    }),
  },
  created() {
    this.$store.dispatch("todo/changeListFromLocalStorage");
  },
  mounted() {
    document.addEventListener("keyup", (e) => {
      this.handleEnter(e);
    });
  },
  beforeDestroy() {
    document.removeEventListener("keyup", (e) => {
      this.handleEnter(e);
    });
  },
  methods: {
    handleEnter(e) {
      if (e.key !== "Enter" || !this.isOpenTodoList) {
        return;
      }

      this.$store.dispatch(
        "todo/changeStartCreateNewItem",
        !this.isStartCreateNewItem
      );

      if (this.isStartCreateNewItem) {
        setTimeout(() => {
          this.$refs.newItem.focus();
        }, 100);
      } else {
        if (this.newItem) {
          this.$store
            .dispatch("todo/addNewItem", this.newItem)
            .then(this.$store.dispatch("todo/setListToLocalStorage"));
        }

        this.newItem = null;
      }
    },
  },
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

    .addNewItem {
      margin: 10px 0 10px 0;

      input {
        width: 100%;
      }
    }
  }
}
</style>
