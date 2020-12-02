import React from "react"
import { Container, ButtonStyled, TextCard, TextFieldStyled, UpDown, Title, MainContainerDetail, CardDetail, CardContainer, MainPost, Icon, Form, Input } from "./styled"
import upArrow from "../../assets/upArrow.png"
import downArrow from "../../assets/downArrow.png"
import useRequestData from "../../hooks/useRequest"
import { BASE_URL } from "../../constants/apiConstants"
import { CommentBox } from '../../services/commentBox';
//hooks
import { useHistory } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { useProtectPage } from "../../hooks/useProtectPage"
import { useParams } from "react-router-dom"

const DetailsPage = () => {
    useProtectPage()
    const params = useParams()
    const data = useRequestData(undefined, `${BASE_URL}/posts/${params.id}`)
    // const history = useHistory()

    const { form, onChange } = useForm({ text: "" });
    CommentBox(form)

    const handleCommentBox = (event) => {
        event.preventDefault();
        
    }

    return (
        <Container>
            {data &&
                <CardContainer>
                    <CardDetail>
                        <UpDown>
                            <Icon src={upArrow} />
                            {data.post.votesCount}
                            <Icon src={downArrow} />
                        </UpDown>
                        <MainPost>
                            <Title>
                                {data.post.username}
                                <p></p>
                                {data.post.title}
                            </Title>
                            <MainContainerDetail>
                                <TextCard>
                                    {data.post.text}
                                </TextCard>
                                <form onSubmit={handleCommentBox}>
                                    <TextFieldStyled                            
                                        id="standard-name"
                                        variant="outlined"
                                        label="Comentário"
                                        value={form.text}
                                        onChange={onChange}
                                        name={"text"}
                                    />
                                    <ButtonStyled type={"submit"} size="small" variant="contained" color="primary">Comentar</ButtonStyled>
                                </form>
                            </MainContainerDetail>
                        </MainPost>
                    </CardDetail>
                </CardContainer>}
        </Container>
    )
}
export default DetailsPage;

