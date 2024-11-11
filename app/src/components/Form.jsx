import React, { useRef } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addTask } from "../features/task/taskSlice";
import { nanoid } from "@reduxjs/toolkit";
import { customFetch } from "../util/customFetch";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const createTask = async (newTask) => {
  const response = await customFetch.post("/tasks", newTask);
  return response.data; 
};

const Form = () => {
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const { task } = useSelector((store) => store.task);
  const queryClient=useQueryClient(); 


 const mutation = useMutation({
   mutationFn: createTask,
   onSuccess: (data) => {
     console.log("Task created:", data);
     queryClient.invalidateQueries(['tasks']); 

   },
   onError: (error) => {
     console.error("Error creating task:", error);
   },
 });
  


  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: nanoid(),
      name: inputRef.current.value,
      completed: false,
    };

    dispatch(
      addTask(newTask)
    );

    mutation.mutate(newTask)
  };

  return (
    <Wrapper>
      <form action="/api/task" onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter item" ref={inputRef} />
        <button type="submit" className="submit-btn">
          Add Task
        </button>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 2rem;

  form {
    min-width: 100%;
    text-align: center;
  }

  input,
  .submit-btn {
    height: 2rem;
  }

  input {
    width: 70%;
    padding-left: 1rem;
    margin-right: 0.5rem;
  }

  .submit-btn {
    width: 20%;
    background: #e9d3ac;
    border: none;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    letter-spacing: 1px;
  }

  .submit-btn:hover {
    background-color: lightblue;
  }
`;

export default Form;
