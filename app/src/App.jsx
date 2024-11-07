import styled from "styled-components";
import { useState, useEffect } from "react";
import { customFetch } from "./util/customFetch";

function App() {
  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    try {
      const response = await customFetch("/tasks");
      setTasks(response?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <Wrapper>
      <section className="section-center">
        <div className="title">
          <h1>Task Manager</h1>
        </div>

        {tasks.map((item) => {
          return <h2 key={item.id}>{item.name}</h2>;
        })}
      </section>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  min-height: 100vh;
  background: var(--primary-100);

  .section-center {
    margin: 0 auto;
  }
`;

export default App;
