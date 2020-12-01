import styled from 'styled-components';


export const Logo = styled.img`
  max-width: 400px;
  margin: 60px;
`;

export const ContainerPage = styled.div`  
  display: flex;  
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media(max-width: 400px) {
    width: 95%;
  }
`
export const LoginContainer = styled.div`
  width: 60%;
  height: 330px;
  padding: 10px;
  margin-top: 150px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media(max-width: 400px) {
    width: 95%;
  }
`
export const Title = styled.h2`
  color: #FFF;
  font-size: 32px;
  margin-top: 0;  
`
export const SubTitle = styled.p`
  color: #FFF;
  margin: 0;
  font-weight: 500;  
`
export const Form = styled.form`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Input = styled.input`
  width: 50%;
  height: 25px;
  background-color: #EDEDED;
  color: #000000;
  font-size: 18px;
  font-weight: 700;
  padding: 15px 15px;
  margin-top: 25px;
  border-radius: 90px;
  border: none;
  @media(max-width: 400px) {
    border: none;
  }
`
export const ButtonLogin = styled.button`
  width: 50%;
  height: 45px;
  background-color: #3f51b5;
  color: white;
  font-size: 22px;
  font-weight: bold;
  padding: 5px 0;
  margin-top: 32px;
  border-radius: 90px;
  outline: none;
  border: none;
  transition: all 0,3s ease-in-out;
  cursor: pointer;
  &:hover {
    color: black;
    background-color: #757de8;
  }
  @media(max-width: 400px) {
    width: 90%;
    border: none;
  }
`
export const ButtonSignUp = styled.button`
  width: 50%;
  height: 45px;  
  color: #3f51b5;
  font-size: 22px;
  font-weight: bold;
  padding: 5px 0;
  margin-top: 32px;
  border-radius: 90px;
  outline: none;
  border: none;
  background-color:white;
  transition: all 0,3s ease-in-out;
  cursor: pointer;
  &:hover {
    color: black;
    background-color: whitesmoke;
  }
  @media(max-width: 400px) {
    width: 90%;
    border: none;
  }
`