import { createSelector, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./state";

export type FilterMode = "ALL" | "COMPLETED" | "CURRENT";

export interface Task {
  id: string;
  title: string;
  status: boolean;
}

interface TaskState {
  tasks: Task[];
  mode: FilterMode;
}

const initialState: TaskState = {
  tasks: [],
  mode: "ALL",
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      if (action.payload.title.length < 30) {
        state.tasks.push(action.payload);
      }
    },
    completeTask: (state, action: PayloadAction<Task>) => {
      const task = state.tasks.find((task) => task.id === action.payload.id);
      task!.status = true;
    },
    unCompleteTask: (state, action: PayloadAction<Task>) => {
      const task = state.tasks.find((task) => task.id === action.payload.id);
      task!.status = false;
    },
    changeMode: (state, action: PayloadAction<FilterMode>) => {
      state.mode = action.payload;
    },
  },
});

export const { addTask, completeTask, unCompleteTask, changeMode } =
  tasksSlice.actions;

export const getTasks = (state: RootState) => state.tasks.tasks;
export const modeSelector = (state: RootState) => state.tasks.mode;
export const tasksSelector = (state: RootState) => state.tasks.tasks;
export const tasksSelectorNew = createSelector(
  [getTasks, modeSelector],
  (tasks, mode) => {
    if (mode === "ALL") {
      return tasks;
    }
    if (mode === "COMPLETED") {
      return tasks.filter((task) => task.status === true);
    }
    if (mode === "CURRENT") {
      return tasks.filter((task) => task.status === false);
    }
  }
);

export default tasksSlice.reducer;
