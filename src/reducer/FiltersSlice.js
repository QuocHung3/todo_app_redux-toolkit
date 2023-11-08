import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    search: "",
    priority: "All",
  },
  reducers: {
    searchFiltersChange: (state, action) => {
      state.search = action.payload;
    },
    priorityFiltersChange: (state, action) => {
      state.priority = action.payload;
    },
  },
});
