import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";

const crudSlice = createSlice({
  name: "crud",
  initialState: {
    tasks: [
      {
        title: "Edit Navbar",
        author: "Alice",
        assigned_to: "Lucy",
        end_date: "2024-02-29",
        id: "3f13234e-7bb1-4f31-9cad-8911cfe6119c",
      },
      {
        title: "Update Footer",
        author: "Moly",
        assigned_to: "Kim",
        end_date: "2024-03-03",
        id: "8d519f16-b845-4a14-8094-14b62020d9f8",
      },
    ],
  },
  reducers: {
    addTask: (state, action) => {
      // add id to todo
      action.payload.id = v4();
      // add task to current data
      state.tasks.push(action.payload);
    },
    deleteTask: (state, action) => {
      // 1. road with filter
      // const filtred = state.tasks.filter((task) => task.id !== action.payload);

      // 2. road with splice

      // a- find index of task you want to delete

      const index = state.tasks.findIndex((i) => i.id === action.payload);

      // b- remove from array

      state.tasks.splice(index, 1);
    },

    editTask: (state, action) => {
      // update task you want to edit with splice

      // a - find the index

      const index = state.tasks.findIndex((i) => i.id === action.payload.id);

      // b- edit with splice
      state.tasks.splice(index, 1, action.payload);
    },
  },
});

export const { addTask, deleteTask, editTask } = crudSlice.actions;
export default crudSlice.reducer;
