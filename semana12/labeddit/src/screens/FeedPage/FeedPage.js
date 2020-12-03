import React from "react"
//requisições
import { useProtectPage } from "../../hooks/useProtectPage"
import useRequestData from "../../hooks/useRequest"
import { BASE_URL } from "../../constants/apiConstants"
//Rotas
import { goToDetailPage, goToPostPage } from "../../routes/coordinator"
import { useHistory } from 'react-router-dom';
//Estilizações
import { ButtonStyled,Container, UpDown, Title, MainContainer, Card, CardContainer, MainPost, Icon } from "./styled"
import upArrow from "../../assets/upArrow.png"
import downArrow from "../../assets/downArrow.png"
const FeedPage = () => {
    const history = useHistory()
    useProtectPage()

    const getPosts = useRequestData(undefined, `${BASE_URL}/posts`)

    return (

        <Container>
            <ButtonStyled variant="contained" color="#333333" onClick={() => goToPostPage(history)} >Add post</ButtonStyled>
            {getPosts && getPosts.posts.map((item) => {
                return (
                    <CardContainer>                        
                            <Card>
                                <UpDown>
                                    <Icon src={upArrow} />
                                    {item.votesCount}
                                    <Icon src={downArrow} />
                                </UpDown>
                                <MainPost onClick={() => goToDetailPage(history, item.id)}>
                                    <Title>
                                        {item.username}
                                        <p></p>
                                        {item.title}
                                    </Title>
                                    <MainContainer>{item.text}</MainContainer>
                                </MainPost>
                            </Card>                        
                    </CardContainer>
                )
            })}

        </Container>

    )
}
export default FeedPage;

