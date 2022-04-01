export function changeVisibleTodoList(context, payload) {
  return context.commit("changeVisibleTodoList", payload);
}

export function changeTodoItemCompleted(context, payload) {
  return context.commit("changeTodoItemCompleted", payload);
}

export function removeCompletedItems(context) {
  let stateWithoutCompleted = context.getters.todoActive;
  return context.commit("changeListItems", stateWithoutCompleted);
}

export function changeStartCreateNewItem(context, payload) {
  return context.commit("changeStartCreateNewItem", payload);
}

export function addNewItem(context, payload) {
  return context.commit("addNewItem", payload);
}

export function changeListFromLocalStorage(context) {
  let listItems = JSON.parse(localStorage.getItem("listItems"));
  return context.commit("changeListItems", listItems);
}

export function setListToLocalStorage(context) {
  let listItems = context.getters.todoAll;
  localStorage.setItem("listItems", JSON.stringify(listItems));
}
