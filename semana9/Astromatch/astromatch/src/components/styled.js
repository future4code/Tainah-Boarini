import styled from "styled-components"

export const Container = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
`;


export const Card = styled.div `
    display:flex;
    align-items: center;
    flex-direction:column;
    background-color: whitesmoke;
    width: 300px;
    height: 500px;
    border-radius: 10px;
`;

export const Header = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: bold;
    width: 100%;
    height: 60px;
    background-color:#753192;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;   
`;

export const Footer = styled.div`
    display:flex;
    position: relative;
    justify-content: space-evenly;
    margin-top: auto;
    width: 100%;    
    height: 100px;
    justify-content: center;
    background-color: #4AA397;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px; 
`;

export const Button = styled.button`    
    border-radius: 90px;
    width: 70px;
    height: 70px;
    border: none;
    margin: 15px 30px;
    cursor: pointer;
    &:hover {
        background-color: #753192;
        color: white;
    }
`;

export const ContainerCard = styled.div`
    display: flex;
    align-items: center;
    flex-direction:column;
    margin-top: auto;
    width: 100%;   
    font-family: arial;
`;

export const Img = styled.img`
    width: 50%;
`;

export const Bio = styled.p`
    width: 90%;
`;