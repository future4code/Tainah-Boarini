import styled from "styled-components";

export const CardTrip = styled.div`
  background-color:black;
`;

export const CardText = styled.p`
  text-align: center;
  background-color: gray;
  width: 80%;
  height: 300px;
  border: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  cursor: pointer;
  margin: 2%;
  &:hover {
    border: green;
  }
`;

   