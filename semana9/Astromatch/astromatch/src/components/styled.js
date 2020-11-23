import styled from "styled-components"
import clickDislike from "../img/clickDiscard.png"

//======================================================== General ==============================

export const Container = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background-image: url("https://www.nasa.gov/sites/default/files/thumbnails/image/p1639ay-goodss-160930.jpg")
`;

export const Card = styled.div `
    display:flex;
    align-items: center;
    flex-direction:column;
    background-color: whitesmoke;
    width: 450px;
    height: 650px;
    border-radius: 10px;
`;

export const Header = styled.div `
    display: flex;
    align-items: center;    
    text-align: center;
    color: white;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: bold;
    width: 100%;
    height: 90px;
    background-color:#381A4D;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;       
`;

export const Logo = styled.img`
position:fixed;
    margin-left:100px;
    width: 250px;
`;

export const ContainerCard = styled.div`
    display: flex;
    align-items: center;
    flex-direction:column;
    margin-top: auto;
    width: 100%;   
    font-family: arial;
`;


//======================================================== Home ==============================

export const IconHeart = styled.img`
    display:flex;   
    width:30px;
    margin:380px;
    cursor: pointer;
    opacity: 1;
    &:hover {
        opacity: .5;
    }
`;

export const Img = styled.img`
    width: 50%;
`;

export const Bio = styled.p`
    width: 90%;
`;

export const Footer = styled.div`
    display:flex;
    justify-content: space-evenly;
    margin-top: auto;
    padding-bottom: 30px;
    padding-top:30px;
    width: 100%;    
    height: 100px;
    justify-content: center;
    background-color: #381A4D;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px; 
`;

export const Button = styled.img`      
    width: 70px;
    height: 70px;    
    margin: 15px 80px 10px;
    cursor: pointer;
    &:hover {
       width: 80px;
       height: 80px;          
    }
`;

//======================================================== MatchScreen ==============================

export const IconReturn = styled.img`
    display:flex;
    position:relative;
    width:30px;
    margin:30px;
    cursor: pointer;
    opacity: 1;
    &:hover {
        opacity: .5;
    }
`;

export const ImgMatches = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 100%;
`;

export const ContainerMatches = styled.div`
    display:flex;
    align-items:center;
`;

//======================================================== App ==============================

export const ButtonClear = styled.button`
    position: fixed;
    margin-top: 380px;
    background-color: #E7E7E9;
    border: none;
    padding: 20px;
    border-radius: 60px;
`;