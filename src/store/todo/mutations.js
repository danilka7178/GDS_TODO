export default {
  changeVisibleTodoList(state, payload) {
    state.isOpenTodoList = payload;
  },

  changeTodoItemCompleted(state, payload) {
    let targetItem = state.todoList.find((el) => el.id === payload);
    targetItem.completed = !targetItem.completed;
  },

  changeListItems(state, payload) {
    state.todoList = payload;
  },

  changeStartCreateNewItem(state, payload) {
    state.isStartCreateNewItem = payload;
  },

  addNewItem(state, payload) {
    let newItem = {
      id: Date.now(),
      text: payload,
      completed: false
    };

    state.todoList.push(newItem);
  }
};
