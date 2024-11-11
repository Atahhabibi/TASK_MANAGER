import styled from "styled-components";

const singleTask = ({ id, completed, name }) => {
  return (
    <Wrapper>
      <div className="checkbox-container">
        <input type="checkbox" className="checkbox" defaultChecked={completed} />
        <h4 className="item-name">{name}</h4>
      </div>

      <div className="btn-container">
        <button className="edit">edit</button>
        <button className="delete">delete</button>
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
export default singleTask;
