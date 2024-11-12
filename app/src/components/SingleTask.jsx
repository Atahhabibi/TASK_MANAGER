import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  changeFlag,
  changeInput,
  checkedTask,
  deleteTask,
  updateTask
} from "../features/task/taskSlice";
import { customFetch } from "../util/customFetch";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const editTask = async ({ id, task }) => {
  const response = await customFetch.patch(`/tasks/${id}`, task);
  return response.data;
};

const deleteItem = async (id) => {
  const response = await customFetch.delete(`/tasks/${id}`);
  return response.data;
};

const SingleTask = ({ id, completed, name }) => {
  const dispatch = useDispatch();
  const { tasksList } = useSelector((store) => store.task);

  const queryClient = useQueryClient();

 const updateMutate = useMutation({
    mutationFn: editTask,
    onSuccess: (data) => {
      console.log("task updated", data);
      queryClient.invalidateQueries(["tasks"]);
    },
    onError: (error) => {
      console.log(error);
    }
  });

  const deleteMutate = useMutation({
    mutationFn: deleteItem,
    onSuccess: (data) => {
      console.log("task deleted", data);
      dispatch(deleteTask({ id }));
      queryClient.invalidateQueries(["tasks"]);
    },
    onError: (error) => {
      console.log(error);
    }
  });

  const handleTask = ({ e, id }) => {
    const targetClass = e.target.textContent;

    if (targetClass === "delete") {
      deleteMutate.mutate(id);
    }

    if (targetClass === "edit") {
      let task = tasksList.find((i) => i.id === id);
      dispatch(changeFlag({status:true,id:task.id}));
      const inputTask = document.body.querySelector(".taskInput");
      inputTask.value = task.name;
      inputTask.focus();
      dispatch(changeInput(task.name));
    }

    if (e.target.classList.contains("checkbox")) {
      dispatch(checkedTask({ id }));

      let task = tasksList.find((i) => i.id === id);

      task = { ...task, completed: !completed };

      updateMutate.mutate({ id, task });
    }
  };

  return (
    <Wrapper>
      <div className="checkbox-container">
        <input
          type="checkbox"
          className="checkbox"
          onChange={(e) => handleTask({ e, id })}
        />
        <h4
          className="item-name"
          style={{ textDecoration: completed ? " line-through" : " " }}
        >
          {name}
        </h4>
      </div>

      <div className="btn-container">
        <button className="edit" onClick={(e) => handleTask({ e, id })}>
          edit
        </button>
        <button className="delete" onClick={(e) => handleTask({ e, id })}>
          delete
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  display: flex;
  justify-content: space-between;

  margin: 0 auto;
  width: 95%;

  margin-top: 1rem;
  margin-bottom: 1rem;

  .checkbox-container {
    display: flex;
    padding: 0.3rem;
    min-width: 50%;
    align-items: center;

    .item-name {
      margin-left: 0.5rem;
      font-size: 1.3rem;
    }
  }

  .btn-container {
    padding: 0.5rem;

    .delete,
    .edit {
      text-transform: capitalize;
      margin-left: 0.5rem;
      padding: 0.2rem 0.5rem;
      cursor: pointer;
      border: none;
      transition: all 0.3s ease-in;
      letter-spacing: 1px;
      border-radius: 5px;
    }

    .delete {
      background-color: #000000;
      color: white;
    }

    .edit {
      background-color: #62d243;
      color: black;
    }

    button:hover {
      background-color: lightblue;
    }
  }
`;
export default SingleTask;
