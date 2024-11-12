import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasksList: [],
  inputName: "",
  editFlag:{status:false,id:""},
  task: {
    id: "",
    name: "",
    completed: false
  }
};

export const taskSlice = createSlice({
  name: "tasks",
  initialState,

  reducers: {
    changeInput: (state, action) => {
      state.inputName = action.payload;
      console.log(action.payload);
    },

    addTask: (state, action) => {
      const newItem = action.payload;
      state.task.title = newItem.name;
      state.task.id = newItem.id;
      state.task.completed = newItem.completed;
      state.tasksList.push(newItem);
    },

    completeTask: (state, action) => {
      console.log(action.payload);
    },
    deleteTask: (state, action) => {
      console.log(action.payload);
    },
    updateTask: (state, action) => {
      const newTasks = action.payload;
      state.tasksList = newTasks;
    },
    checkedTask: (state, action) => {
      console.log(action.payload);
    },
    changeFlag:(state,action)=>{
      state.editFlag.status=action.payload.status; 
      state.editFlag.id=action.payload.id; 
    }
  }
});

export const {
  completeTask,
  deleteTask,
  updateTask,
  addTask,
  checkedTask,
  changeInput,
  changeFlag
} = taskSlice.actions;

export default taskSlice.reducer;
