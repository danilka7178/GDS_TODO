export function changeVisibleTodoList(context, payload) {
  return context.commit("changeVisibleTodoList", payload);
}

export function changeTodoItemCompleted(context, payload) {
  return context.commit("changeTodoItemCompleted", payload);
}

export function removeCompletedItems(context) {
  let stateWithoutCompleted = context.getters.todoActive;
  return context.commit("removeCompletedItems", stateWithoutCompleted);
}
