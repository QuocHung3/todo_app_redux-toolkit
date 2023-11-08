import { configureStore } from "@reduxjs/toolkit";
import { filtersSlice } from "../reducer/FiltersSlice";
import { todoSlice } from "../reducer/TodoSlice";

const store = configureStore({
  reducer: {
    filters: filtersSlice.reducer,
    todoList: todoSlice.reducer,
  },
});

export default store;
