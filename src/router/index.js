import VueRouter from "vue-router";
import All from "../components/todo/All";
import Active from "../components/todo/Active";
import Completed from "../components/todo/Completed";

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "",
      name: "all",
      component: All
    },
    {
      path: "/active",
      name: "active",
      component: Active
    },
    {
      path: "/completed",
      name: "completed",
      component: Completed
    }
  ]
});
