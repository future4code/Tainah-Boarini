import React from "react"
import { Container, UpDown, Title, MainContainer, Card, CardContainer, MainPost, Icon } from "./styled"
import upArrow from "../../assets/upArrow.png"
import downArrow from "../../assets/downArrow.png"


const DetailsPage = () => {
    const history = useHistory()
    //pathparams aqui

    return (
        <Container>
            <CardContainer>
                <Card>
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
        </Container>
    )
}
export default DetailsPage;

