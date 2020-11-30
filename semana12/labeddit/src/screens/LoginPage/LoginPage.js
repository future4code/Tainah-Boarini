  
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { LoginContainer, Title, SubTitle, Form, Input, Button} from './styled';

export default function LoginPage() {
  const { form, onChange } = useForm({ name: "", password: "" });
  const handleLogin = (event) => {
    event.preventDefault();
  }

  return (
    <LoginContainer>
      <Title>Login</Title>
      <SubTitle>Por favor, informe seu e-mail e senha:</SubTitle>
      <Form onSubmit={handleLogin}>
        <Input 
          type={'name'} 
          value={form.name}
          name={'name'}
          placeholder={'Nome Completo'} 
          onChange={onChange}
          required
        />
        <Input 
          type={'password'} 
          value={form.password}
          name={'password'}
          placeholder={'Senha'}  
          onChange={onChange}
          required
        />
        <Button>Login</Button>
      </Form>
    </LoginContainer>
  );
}