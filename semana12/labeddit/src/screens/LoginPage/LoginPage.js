import React, {useContext} from 'react';
import { useForm } from '../../hooks/useForm';
import { login } from '../../services/login';
import { Logo, LoginContainer, Form, Input, ButtonLogin, ButtonSignUp, ContainerPage } from './styled';
import logo from "../../assets/labeddit.png"
import { useHistory } from 'react-router-dom';
import { useUnprotectPage } from '../../hooks/useUnprotectPage';
import { goToSignUp } from "../../routes/coordinator"
import LoggedContext from '../../context/LoggedContex';

export default function LoginPage() {
  useUnprotectPage()
  const history = useHistory()
  const loggedContext = useContext(LoggedContext)

  const { form, onChange } = useForm({ email: "", password: "" });

  const handleLogin = (event) => {
    event.preventDefault();
    login(form, history, loggedContext.setLogged)
  }

  return (
    <ContainerPage>
      <LoginContainer>
        <Logo src={logo} />
        <Form onSubmit={handleLogin}>
          <Input
            type={'email'}
            value={form.email}
            name={'email'}
            placeholder={'E-mail'}
            onChange={onChange}
            
          />
          <Input
            type={'password'}
            value={form.password}
            name={'password'}
            placeholder={'Senha'}
            onChange={onChange}
            
          />
          <ButtonLogin>Login</ButtonLogin>
          <ButtonSignUp onClick={()=>goToSignUp(history)}>Cadastro</ButtonSignUp>

        </Form>
      </LoginContainer>
    </ContainerPage>
  );
}