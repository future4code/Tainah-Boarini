import styled from "styled-components"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export const ButtonStyled = styled(Button)`
    margin-top: 50px;     
`;

//General ==================================================================================
export const Container = styled.div`
    display:flex;
    /* justify-content: center; */
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
    /* background-color: yellow;     */
    display:flex;
    justify-content: space-between;
    height: 300px;
    width: 600px;
    cursor: pointer;
    &:hover {
    border: 2px solid #3f51b5;
  }
`;

export const MainPost = styled.div`
    width: 100%;   
    /* background-color: black; */
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
    /* border-style:black; */
    justify-content: space-around;
    align-items:center;
    width: 100%;
    height:100px;
    background-color: #FFFFFF;
`;

//Div de texto e nº de comentários =================================================================

export const MainContainer = styled.div`
    display:flex;
    justify-content: space-around;    
    flex-direction: column;
    width: 94%;
    height: 56%;
    padding: 15px;
    /* background-color: green; */
    background-color: #FFFFFF;
`;
export const TextCard = styled.div`
    display:flex;   
    justify-content: center;    
    align-items:center;
    width: 93%;    
    padding-bottom: 40px;
`;
export const CommentsCount = styled.div`
    display:flex;   
    align-self: flex-end;    
    margin-top:80px;
    /* background-color:red; */
    color: #ADADAD;
    font-weight: bold;
`;
export const Text = styled.div`
    display:flex;   
    justify-content: right;    
    align-items:center;
    /* background-color: blue; */

`;
