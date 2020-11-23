import React, {useState} from "react";
import Home from "./components/Home/Home";
import MatchScreen from "./components/MatchScreen";
import {Container} from "./components/styled";

function App() {
  const [currentPage, setCurrentPage] = useState(false)

  

  const setPage = () => {
    setCurrentPage(!currentPage)
  }

  return (
    <Container>
        {currentPage === true ? <Home goMatchScreen={setPage}/> : <MatchScreen goHome={setPage}/>}
        
    </Container>
  );
}

export default App;

