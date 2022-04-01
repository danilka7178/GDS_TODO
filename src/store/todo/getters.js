export function isOpenTodoList(state) {
  return state.isOpenTodoList;
}

export function todoAll(state) {
  return state.todoList;
}

export function todoActive(state) {
  return state.todoList.filter((el) => !el.completed);
}

export function todoCompleted(state) {
  return state.todoList.filter((el) => el.completed);
}

export function isStartCreateNewItem(state) {
  return state.isStartCreateNewItem;
}
