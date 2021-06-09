import React from 'react'

import {
    Wrapper,
    Row,
    Column,
    Title,
    Link,
    Container,
    Img,
    ImageContainer,
    IconContainer,
    Icon
} from './styles.js'

import logowhite from '../../images/logowhite.svg'
import facebook from '../../images/icon-facebook.svg'
import twitter from '../../images/icon-twitter.svg'
import pinterest from '../../images/icon-pinterest.svg'
import instagram from '../../images/icon-instagram.svg'

const Footer = () => {
    return (
        <Wrapper>
            <Container >
                <Row>
                    <Column>
                        <ImageContainer>
                            <Img src={logowhite} />
                        </ImageContainer>
                    </Column>
                    <Column />
                    <Column>
                        <Title>Features</Title>
                        <Link href="#">Link shortening</Link>
                        <Link href="#">Branded Links</Link>
                        <Link href="#">Analytics</Link>
                    </Column>
                    <Column>
                        <Title>Resources</Title>
                        <Link href="#">Blog</Link>
                        <Link href="#">Developers</Link>
                        <Link href="#">Support</Link>
                    </Column>
                    <Column>
                        <Title>Company</Title>
                        <Link href="#">About</Link>
                        <Link href="#">Our Team</Link>
                        <Link href="#">Careers</Link>
                        <Link href="#">Contact</Link>
                    </Column>
                    <IconContainer>
                        <Icon src={facebook} />
                        <Icon src={twitter} />
                        <Icon src={pinterest} />
                        <Icon src={instagram} />
                    </IconContainer>
                </Row>
            </Container>
        </Wrapper>
    )
}

export default Footer
