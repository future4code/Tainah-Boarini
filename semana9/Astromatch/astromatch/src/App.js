
import styled from "styled-components";
import Post from './components/Post";
import React from 'react';

const AppContainer = styled.div `
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

function App() {
  return (
    <AppContainer>
      <h1>Hello World!</h1>
      <Post />
    </AppContainer>

  );
}

export default App;

