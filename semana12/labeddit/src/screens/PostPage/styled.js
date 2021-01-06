import styled from "styled-components"
import Button from '@material-ui/core/Button';

//material UI
export const ButtonStyled = styled(Button)`
    margin: 30px;     
`;

//General
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
    
`;

export const Card = styled.form`
    margin-top: 60px;
    background-color: #F8F9FA;    
    display:flex;
    flex-direction:column;
   align-items:center;
    height: 50vh;
    width: 70vw;
    border-radius: 7px;
`;

export const Title = styled.input`
    color: #ADADAD;
    font-weight: bold;
    display:flex;       
    border-radius: 7px;    
    width: 90%;
    height:20%;
    margin: 10px;
    margin-top: 5%;
    background-color: #FFFFFF;
    border: 1px solid #EDEFF1;
`;

export const MainContainer = styled.input`
    border-radius: 7px;
    display:flex;
    justify-content: center;    
    align-items:center;
    width: 90%;
    height: 50%;
    margin-bottom: 20px;
    justify-content: space-around;
    background-color:#FFFFFF;
    border: 1px solid #EDEFF1;
`;


