import { createSelector } from "@reduxjs/toolkit";

export const searchtextSelector = (state) => state.filters.search;
export const todoListSelector = (state) => state.todoList.todos;

export const todosRemainingSelector = createSelector(
  searchtextSelector,
  todoListSelector,
  (searchText, todoList) => {
    return todoList.filter((todo) => {
      // console.log(">>>>Check todo:", todo);
      return todo.name.includes(searchText);
    });
  }
);
