import styled from "styled-components"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

//material UI
export const TextFieldStyled = styled(TextField)`
    width:90%;
    margin-top:40%;
    margin-bottom:200%;
    
`;
export const ButtonStyled = styled(Button)`
    margin-top: 30px;     
`;


//General
export const Container = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100vw;
    min-height:100vh; 
    background-color: #DAE0E6;
`;

export const CardContainer = styled.div`    
    margin-top: 30px; 
    
`;

export const Card = styled.div`
    background-color: #F8F9FA;    
    display:flex;
    /* justify-content: center; */
    justify-content: space-between;
    height: 300px;
    width: 600px;
    cursor: pointer;
    &:hover {
    border: 2px solid #3f51b5;
  }
`;
export const CardDetail = styled.div`
    background-color: #F8F9FA;    
    display:flex;
    /* justify-content: center; */
    justify-content: space-between;
    height: 300px;
    width: 600px;
`;

export const MainPost = styled.div`
    width: 100%;   
`;

export const UpDown = styled.div`
    background-color: #F8F9FA;
    display:flex;
    flex-direction: column;
    margin: 20px;
    align-items: center;    
    width: 10%;
`;

export const Icon = styled.img`
    width: 30px;
    cursor: pointer;
    &:hover {
    transform: scale(1.3);
  }
`;

export const Title = styled.div`
    color: #ADADAD;
    font-weight: bold;
    display:flex;    
    border-style:black;
    justify-content: space-around;
    align-items:center;
    width: 100%;
    height:20%;
    background-color: #FFFFFF;
`;

export const MainContainer = styled.div`
    display:flex;
    justify-content: center;    
    align-items:center;
    width: 93%;
    height: 70%;
    padding: 15px;
    background-color: #FFFFFF;
`;
export const MainContainerDetail = styled.div`
    display:flex;
    flex-direction: column;
    /* justify-content: center;     */
    align-items:center;
    width: 93%;
    height: 70%;
    padding: 15px;
    background-color: #FFFFFF;
`;
export const TextCard = styled.div`
    display:flex;   
    justify-content: center;    
    align-items:center;
    width: 93%;    
    padding-bottom: 40px;
`;

export const CommentBox = styled.div`
    display:flex;
    justify-content: center;    
    align-items:center;
    width: 93%;
    height: 70%;
    padding: 15px;
    background-color: #FFFFFF;
`;

