import React from 'react'
import {
    Wrapper,
    Container,
    TextContainer,
    Heading,
    Paragraph,
    Btn,
    ImageContainer,
    Img
} from './HeroStyles'

import heroImage from '../../images/illustration-working.svg'


const Hero = () => {
    return (
        <Wrapper>
            <Container>
                <TextContainer>
                    <Heading>More than just shorter links</Heading>
                    <Paragraph>Build your brand's recognition and get detailed insight on how your links are performing.</Paragraph>
                    <Btn primary>Get Started</Btn>
                </TextContainer>
                <ImageContainer>
                    <Img src={heroImage} />
                </ImageContainer>
            </Container>
        </Wrapper>
    )
}

export default Hero
