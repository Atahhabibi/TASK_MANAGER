import styled from "styled-components";
import { customFetch } from "../util/customFetch";
import { Form, ListsContainer } from "../components";
import { useQuery } from "@tanstack/react-query";

const fetchTasks = async () => {
  const response = await customFetch("/tasks");
  console.log(response.data);
  return response.data;
};

const Home = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["tasks"],
    queryFn: fetchTasks,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <Wrapper>
      <div className="section-center">
        <div className="section-title">
          <h1>Task manager</h1>
        </div>

        <div className="div"></div>

        <Form />
        <ListsContainer tasks={data?.data} />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 100vh;

  .section-center {
    background-color: white;
    width: 40rem;
    margin: 0 auto;
    margin-top: 2rem;
    padding: 1rem;
    border-radius: 5px;
    max-width: 60rem;

    .section-title {
      position: relative;
      font-size: 24px;
      font-weight: bold;
      text-align: center;
      margin-top: 40px;
    }

    .section-title::after {
      content: "";
      position: absolute;
      top: 100%;
      left: 30%;
      width: 40%;
      height: 4px;
      background-color: #ec8c8c;
    }
  }
`;

export default Home;
