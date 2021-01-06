import React from "react"
//requisições
import { useProtectPage } from "../../hooks/useProtectPage"
import useRequestData from "../../hooks/useRequest"
import { BASE_URL } from "../../constants/apiConstants"
//Rotas
import { goToDetailPage, goToPostPage } from "../../routes/coordinator"
import { useHistory } from 'react-router-dom';
//Estilizações
import { Text, CommentsCount, ButtonStyled, Container, UpDown, Title, MainContainer, Card, CardContainer, MainPost, Icon } from "./styled"
import upArrow from "../../assets/upArrow.png"
import downArrow from "../../assets/downArrow.png"

import { useParams } from "react-router-dom"
import { vote } from '../../services/vote';

const FeedPage = () => {
    const history = useHistory()
    useProtectPage()

    const { data, getData } = useRequestData(undefined, `${BASE_URL}/posts`)

    return (

        <Container>
            <ButtonStyled variant="contained" color="#333333" onClick={() => goToPostPage(history)} >Add post</ButtonStyled>
            {data && data.posts.map((item) => {
                return (
                    <CardContainer>
                        <Card>
                            <UpDown>
                                <Icon onClick={() => vote(1, item.id, getData)} src={upArrow} />
                                {item.votesCount}
                                <Icon onClick={() => vote(-1, item.id, getData)} src={downArrow} />
                            </UpDown>
                            <MainPost onClick={() => goToDetailPage(history, item.id)}>
                                <Title>
                                    {item.username}
                                    <p></p>
                                    {item.title}
                                </Title>
                                <MainContainer>
                                    <Text>{item.text}</Text>
                                    <CommentsCount>{`${item.commentsCount} Comentários`}</CommentsCount>
                                </MainContainer>
                                {/* <CommentsCount>{`${item.commentsCount}Comentários`}</CommentsCount> */}
                            </MainPost>
                        </Card>
                    </CardContainer>
                )
            })}

        </Container>

    )
}
export default FeedPage;

