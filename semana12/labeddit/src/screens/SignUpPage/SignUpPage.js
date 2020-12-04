import React, {useContext} from 'react';
import { useForm } from '../../hooks/useForm';
import { signUp } from '../../services/signUp';
import { Logo, SignUpContainer, Form, Input, ButtonSignUp, ContainerPage } from './styled';
import logo from "../../assets/labeddit.png"
import { useHistory } from 'react-router-dom';
import { useUnprotectPage } from '../../hooks/useUnprotectPage';
import LoggedContext from '../../context/LoggedContex';

export default function SignUpPage() {
    useUnprotectPage()
    const history = useHistory()
    const loggedContext = useContext(LoggedContext)
    const { form, onChange } = useForm({ email: "", password: "", username: "" });

    const handleLogin = (event) => {
        event.preventDefault();
        signUp(form, history, loggedContext.setLogged)
    }


    return (
        <ContainerPage>
            <SignUpContainer>
                <Logo src={logo} />
                <Form onSubmit={handleLogin}>
                    <Input
                        type={'text'}
                        value={form.username}
                        name={'username'}
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
                    <ButtonSignUp>Cadastrar</ButtonSignUp>

                </Form>
            </SignUpContainer>
        </ContainerPage>
    );
}