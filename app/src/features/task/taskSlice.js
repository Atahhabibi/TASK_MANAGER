import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  task:{
    id:'',
    name:'',
    completed:false,
  },
};

export const taskSlice = createSlice({
  name: "tasks",
  initialState,

  reducers: {
    addTask: (state, action) => {

      const newItem = action.payload; 
      state.task.title=newItem.name; 
      state.task.id=newItem.id; 
      state.task.completed=newItem.completed; 

    },

    completeTask: (state, action) => {
      console.log(state);
    },
    deleteTask: (state, action) => {
      console.log(state);
    },
    updateTask: (state, action) => {
      console.log(state);
    },
  },
});

export const { completeTask, deleteTask, updateTask, addTask } =
  taskSlice.actions;

export default taskSlice.reducer;
