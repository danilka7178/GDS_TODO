export default {
  changeVisibleTodoList(state, payload) {
    state.isOpenTodoList = payload;
  },

  changeTodoItemCompleted(state, payload) {
    let targetItem = state.todoList.find((el) => el.id === payload);
    targetItem.completed = !targetItem.completed;
  },

  removeCompletedItems(state, payload) {
    state.todoList = payload;
  }
};
