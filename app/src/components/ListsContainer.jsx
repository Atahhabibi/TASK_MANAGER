import React from "react";
import { SingleTask } from ".";
import styled from "styled-components";

const ListsContainer = ({ tasks }) => {
  return (
    <Wrapper>
      {tasks.map((item) => {
        return <SingleTask key={item.id} {...item} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 1rem;
`;

export default ListsContainer;
