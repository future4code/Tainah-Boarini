import styled from "styled-components"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
 
//General ===============================================================

export const Container = styled.div`
    display:flex;
    align-items: center;
    flex-direction: column;
    width: 100vw;
    min-height:100vh; 
    background-color: #DAE0E6;
`;

export const CardContainer = styled.div`    
    margin-top: 30px;     
`;

export const CardDetail = styled.div`
    background-color: #F8F9FA;    
    display:flex;
    justify-content: space-between;
    height: 80vh;
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
    height:100px;
    background-color: #FFFFFF;
`;

export const MainContainer = styled.div`
    display:flex;
    justify-content: center;    
    align-items:center;
    width: 93%;
    height: 55%;
    padding: 15px;
    background-color: #FFFFFF;
`;
export const MainContainerDetail = styled.div`
    display:flex;
    flex-direction: column;
    align-items:center;
    max-width: 93%;
    height: 83%;
    padding: 3%;
    background-color: #FFFFFF;
`;
export const TextCard = styled.div`
    display:flex;   
    justify-content: center;    
    align-items:center;
    width: 93%;    
    padding-bottom: 40px;
`;

//caixa comentario ===============================================================

export const TextFieldStyled = styled(TextField)`
    width:90%;
    margin-top:40%;
    margin-bottom:200%;
    
`;

export const Form = styled.form`
    width: 100%;
    margin: 30px;
`;

export const ButtonStyled = styled(Button)`
    margin-top: 50px;     
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

//COMENTARIOS ===============================================================

export const ContainerComments = styled.div`
display:flex;
justify-content: space-around; 
background-color: #FFFFFF;
width:100%;
`;
export const BoxMainComments = styled.div`
display:flex;
justify-content: center; 
flex-direction:column;
padding: 10px;
background-color: #FFFFFF;
width:100%;
`;
export const MainComments = styled.div`
background-color:#FFFFFF;
width:100%;
height: 60%;
`;
export const TitleComments = styled.div`
background-color:#FFFFFF;
color: blue;
width:100%;
height: 40%;
`;

export const UpDownComments = styled.div`
    background-color: #FFFFFF;
    display:flex;
    flex-direction: column;
    margin: 5px;
    align-items: center;    
    width: 10%;
`;

export const IconComments = styled.img`
    padding:5px;
    width: 20px;
    cursor: pointer;
    &:hover {
    transform: scale(1.3);
  }
`;