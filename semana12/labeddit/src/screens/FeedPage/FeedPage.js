import React from "react"
import { useProtectPage } from "../../hooks/useProtectPage"
import { Container, UpDown, Title, MainContainer, Card, CardContainer, MainPost, Icon } from "./styled"
import upArrow from "../../assets/upArrow.png"
import downArrow from "../../assets/downArrow.png"
import useRequestData from "../../hooks/useRequest"
import { BASE_URL } from "../../constants/apiConstants"
import { goToDetailPage } from "../../routes/coordinator"
import { useHistory } from 'react-router-dom';

const FeedPage = () => {
    const history = useHistory()

    const getPosts = useRequestData(undefined, `${BASE_URL}/posts`)
    useProtectPage()
    console.log("getPosts", getPosts)

    return (
        <Container>
            {getPosts && getPosts.posts.map((item) => {
                return (
                    <CardContainer>
                        <Card onClick={() => goToDetailPage(history)}>
                            <UpDown>
                                <Icon src={upArrow} />
                                {item.votesCount}
                                <Icon src={downArrow} />
                            </UpDown>
                            <MainPost>
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

