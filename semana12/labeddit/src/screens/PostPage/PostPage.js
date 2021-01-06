import React from "react"
//requisições
import { postBox } from '../../services/postBox';
import { useProtectPage } from "../../hooks/useProtectPage"
import useRequestData from "../../hooks/useRequest"
import { BASE_URL } from "../../constants/apiConstants"
//Rotas
import { goToFeedPage } from "../../routes/coordinator"
import { useHistory } from 'react-router-dom';
//Estilizações
import { Container, ButtonStyled, Title, MainContainer, Card, CardContainer, MainPost, Icon } from "./styled"
import { useForm } from '../../hooks/useForm';

const PostPage = () => {
    const history = useHistory()
    useProtectPage()

    const { form, onChange, reset } = useForm({ text: "", title: "" });

    const handlePostBox = (event) => {
        event.preventDefault();
        //requisição
        postBox(form)
        reset()
    }

    return (
        <Container>
            <CardContainer>
                <Card onSubmit={handlePostBox}>
                    <Title
                        type={'text'}
                        label="Texto"
                        value={form.title}
                        onChange={onChange}
                        name={"title"}
                        placeholder={'Título'}
                    />
                    <MainContainer
                        type={'text'}
                        label="Texto"
                        value={form.text}
                        onChange={onChange}
                        name={"text"}
                        placeholder={'Texto'}
                    />
                    <ButtonStyled
                        type={"submit"}
                        size="small"
                        variant="contained"
                        color="primary"                        
                    >
                        Postar
                    </ButtonStyled>
                </Card>
            </CardContainer>
        </Container>
    )
}
export default PostPage;
