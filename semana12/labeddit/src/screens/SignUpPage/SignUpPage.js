import React from 'react';
import { useForm } from '../../hooks/useForm';
import { signUp } from '../../services/signUp';
import { Logo, LoginContainer, Form, Input, ButtonLogin, ButtonSignUp, ContainerPage } from './styled';
import logo from "../../assets/labeddit.png"
import { useHistory } from 'react-router-dom';
import { useUnprotectPage } from '../../hooks/useUnprotectPage';

export default function SignUpPage() {
    useUnprotectPage()
    const history = useHistory()
    const { form, onChange } = useForm({ email: "", password: "", username: "" });

    const handleLogin = (event) => {
        event.preventDefault();
        signUp(form, history)
    }

    return (
        <ContainerPage>
            <LoginContainer>
                <Logo src={logo} />
                <Form onSubmit={handleLogin}>
                    <Input
                        type={'text'}
                        value={form.username}
                        name={'name'}
                        placeholder={'Nome Completo'}
                        onChange={onChange}
                        required
                    />
                    <Input
                        type={'email'}
                        value={form.email}
                        name={'email'}
                        placeholder={'E-mail'}
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
                    <ButtonLogin>Cadastrar</ButtonLogin>

                </Form>
            </LoginContainer>
        </ContainerPage>
    );
}